import './filters.scss';
import { Dates, SortByTypes, TopicsTypes } from '../../../types/types';
import { filtersSettingsSelector } from '../../../selectors/articles';
import { getArticlesListRequestAction } from '../../../actions/getArticlesListActions';
import { useDispatch, useSelector } from 'react-redux';
import DropdownList, { DropdownListHandle } from '../../Utils/DropdownList/DropdownList';
import FlatButton from '../../Utils/FlatButton/FlatButton';
import React, { useEffect, useRef } from 'react';
import isEqual from 'lodash.isequal';
import moment from 'moment';

import { clearFiltersSettings, setFiltersSettingsActions } from '../../../actions/setFiltersSettingsActions';

type FiltersPropsType = {
  page: number;
  setLoader(): void;
  resetPage(): void;
};

type ValuesTypes = Dates[] | SortByTypes[] | TopicsTypes[];

const Filters = ({ page, resetPage, setLoader }: FiltersPropsType) => {
  const topicsDropdownList = useRef<DropdownListHandle>(null);
  const datesDropdownList = useRef<DropdownListHandle>(null);
  const sortByDropdownList = useRef<DropdownListHandle>(null);
  const topics: TopicsTypes[] = ['tech', 'travel', 'politics', 'sports'];
  const dates: Dates[] = ['this month', 'this week', 'today'];
  const sortBy: SortByTypes[] = ['popularity', 'publishedAt'];
  const dispatch = useDispatch();
  const filtersSettings = useSelector(filtersSettingsSelector);
  const pages = {
    pageSize: 6,
    page: 1,
  };

  useEffect(() => {
    dispatch(getArticlesListRequestAction({ ...filtersSettings, page }));
  }, [page]);

  const clearFilters = async () => {
    await resetPage();
    await dispatch(clearFiltersSettings());
    await dispatch(
      getArticlesListRequestAction({
        fromDate: '',
        toDate: '',
        topic: 'topic',
        sortBy: 'popularity',
        pageSize: 6,
        page: 1,
        dates: '',
      }),
    );
    await topicsDropdownList.current.resetValue();
    await datesDropdownList.current.resetValue();
    await sortByDropdownList.current.resetValue();
  };

  const formatDates = (value: string | Dates[]) => {
    const DATE_FORMAT = 'YYYY-MM-DD';
    const today = moment();
    switch (value) {
      case dates[0]:
        const startMonthDate = today.startOf('month').format(DATE_FORMAT);
        const endMonthDate = today.endOf('month').format(DATE_FORMAT);
        return {
          ...filtersSettings,
          ...pages,
          fromDate: startMonthDate,
          toDate: endMonthDate,
          dates: dates[0],
        };
      case dates[1]:
        const startWeek = today.startOf('week').format(DATE_FORMAT);
        const endWeek = today.endOf('week').format(DATE_FORMAT);
        return {
          ...filtersSettings,
          ...pages,
          fromDate: startWeek,
          toDate: endWeek,
          dates: dates[1],
        };
      case dates[2]:
        return {
          ...filtersSettings,
          ...pages,
          fromDate: today.format(DATE_FORMAT),
          toDate: today.format(DATE_FORMAT),
          dates: dates[2],
        };
    }
  };

  const onChangeValue = (value: ValuesTypes, type: 'topic' | 'dates' | 'sortBy') => {
    let newFilters = { ...filtersSettings };
    setLoader();
    if (type === 'dates') {
      newFilters = formatDates(value as Dates[]);
    } else {
      newFilters = {
        ...filtersSettings,
        [type]: value,
        ...pages,
      };
    }
    resetPage();
    dispatch(setFiltersSettingsActions(newFilters));
    !isEqual(newFilters, filtersSettings) && dispatch(getArticlesListRequestAction(newFilters));
  };

  return (
    <div className="filters">
      <div className="filters__dropdowns-list dropdowns-list">
        <DropdownList
          defaultValue={filtersSettings.topic || 'Topic'}
          list={topics}
          name="topics"
          onChangeValue={(value: ValuesTypes) => onChangeValue(value, 'topic')}
          ref={topicsDropdownList}
        />
        <DropdownList
          defaultValue={filtersSettings.dates || 'Time'}
          list={dates}
          name="dates"
          onChangeValue={(value: ValuesTypes) => onChangeValue(value, 'dates')}
          ref={datesDropdownList}
        />
        <DropdownList
          defaultValue={filtersSettings.sortBy || sortBy[0]}
          list={sortBy}
          name="sortBy"
          onChangeValue={(value: ValuesTypes) => onChangeValue(value, 'sortBy')}
          ref={sortByDropdownList}
        />
      </div>
      <FlatButton
        className="filters__clear-filters-button clear-filters-button"
        height="32px"
        name="clear-filters"
        onClick={clearFilters}
        reverse
        width="164px"
      >
        Clear Filters
      </FlatButton>
    </div>
  );
};

export default Filters;
