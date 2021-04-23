import './filters.scss';
import { Dates, SortByTypes, TopicsTypes } from '../../../types/types';
import { getArticlesListRequestAction } from '../../../actions/getArticlesListActions';
import { useDispatch } from 'react-redux';
import DropdownList, { DropdownListHandle } from '../../Utils/DropdownList/DropdownList';
import FlatButton from '../../Utils/FlatButton/FlatButton';
import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';

type FiltersPropsType = {
  pageSize: number;
  page: number;
  resetPage(): void;
};

const Filters = ({ pageSize, page, resetPage }: FiltersPropsType) => {
  const topicsDropdownList = useRef<DropdownListHandle>(null);
  const datesDropdownList = useRef<DropdownListHandle>(null);
  const sortByDropdownList = useRef<DropdownListHandle>(null);
  const topics: TopicsTypes[] = ['tech', 'travel', 'politics', 'sports'];
  const dates: Dates[] = ['this month', 'this week', 'today'];
  const sortBy: SortByTypes[] = ['popularity', 'publishedAt'];
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: '',
    topic: 'topic',
    sortBy: 'popularity',
    pageSize,
    page,
  });

  useEffect(() => {
    dispatch(getArticlesListRequestAction({ ...filters, page }));
  }, [page]);

  const clearFilters = () => {
    dispatch(
      getArticlesListRequestAction({
        fromDate: '',
        toDate: '',
        topic: 'topic',
        sortBy: 'popularity',
        pageSize: 6,
        page: 1,
      }),
    );
    topicsDropdownList.current.resetValue();
    datesDropdownList.current.resetValue();
    sortByDropdownList.current.resetValue();
    resetPage();
  };

  const formatDates = (value: string | Dates[]) => {
    const DATE_FORMAT = 'YYYY-MM-DD';
    const today = moment();
    switch (value) {
      case dates[0]:
        const startMonthDate = today.startOf('month').format(DATE_FORMAT);
        const endMonthDate = today.endOf('month').format(DATE_FORMAT);
        return {
          ...filters,
          fromDate: startMonthDate,
          toDate: endMonthDate,
        };
      case dates[1]:
        const startWeek = today.startOf('week').format(DATE_FORMAT);
        const endWeek = today.endOf('week').format(DATE_FORMAT);
        return {
          ...filters,
          fromDate: startWeek,
          toDate: endWeek,
        };
      case dates[2]:
        return {
          ...filters,
          fromDate: today.format(DATE_FORMAT),
          toDate: today.format(DATE_FORMAT),
        };
    }
  };

  const onChangeValue = (value: Dates[] | SortByTypes[] | TopicsTypes[], type: 'topic' | 'dates' | 'sortBy') => {
    let newFilters = { ...filters };
    if (type === 'dates') {
      newFilters = formatDates(value as Dates[]);
    } else {
      newFilters = {
        ...filters,
        [type]: value,
      };
    }
    resetPage();
    setFilters(newFilters);
    dispatch(getArticlesListRequestAction(newFilters));
  };

  return (
    <div className="filters">
      <div className="filters__dropdowns-list dropdowns-list">
        <DropdownList
          defaultValue={'Topic'}
          list={topics}
          name="topics"
          onChangeValue={(value) => onChangeValue(value, 'topic')}
          ref={topicsDropdownList}
        />
        <DropdownList
          defaultValue={'Time'}
          list={dates}
          name="dates"
          onChangeValue={(value) => onChangeValue(value, 'dates')}
          ref={datesDropdownList}
        />
        <DropdownList
          defaultValue={sortBy[0]}
          list={sortBy}
          name="sortBy"
          onChangeValue={(value) => onChangeValue(value, 'sortBy')}
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
