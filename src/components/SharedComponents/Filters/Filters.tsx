import './filters.scss';
import { Dates, SortByTypes, TopicsTypes } from '../../../types/types';
import DropdownList, { DropdownListHandle } from '../../Utils/DropdownList/DropdownList';
import FlatButton from '../../Utils/FlatButton/FlatButton';
import React, { useRef } from 'react';

const Filters = () => {
  const topicsDropdownList = useRef<DropdownListHandle>();
  const datesDropdownList = useRef<DropdownListHandle>();
  const sortByDropdownList = useRef<DropdownListHandle>();
  const topics: TopicsTypes[] = ['tech', 'travel', 'politics', 'sports'];
  const dates: Dates[] = ['this month', 'this week', 'today'];
  const sortBy: SortByTypes[] = ['popularity', 'publishedAt'];

  const clearFilters = () => {
    topicsDropdownList.current.resetValue();
    datesDropdownList.current.resetValue();
    sortByDropdownList.current.resetValue();
  };

  return (
    <div className="filters">
      <div className="filters__dropdowns-list dropdowns-list">
        <DropdownList defaultValue={'Topic'} list={topics} name="topics" ref={topicsDropdownList} />
        <DropdownList defaultValue={'Time'} list={dates} name="dates" ref={datesDropdownList} />
        <DropdownList defaultValue={sortBy[0]} list={sortBy} name="sortBy" ref={sortByDropdownList} />
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
