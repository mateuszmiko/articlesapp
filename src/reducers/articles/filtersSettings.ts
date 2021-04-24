import { FiltersType } from '../../types/types';
import { SetFiltersSettingsActionsType } from '../../actions/setFiltersSettingsActions';

export const initialState: FiltersType = {
  fromDate: '',
  toDate: '',
  topic: 'topic',
  sortBy: 'popularity',
  pageSize: 6,
  page: 1,
  dates: '',
};

const filtersSettings = (state = initialState, action: SetFiltersSettingsActionsType) => {
  switch (action.type) {
    case 'SET_FILTERS_SETTINGS':
      return action.payload || initialState;
    case 'CLEAR_FILTERS_SETTINGS':
      return initialState;
    default:
      return state;
  }
};

export default filtersSettings;
