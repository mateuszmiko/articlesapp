import { FiltersType } from '../types/types';

const SET_FILTERS_SETTINGS = 'SET_FILTERS_SETTINGS';
const CLEAR_FILTERS_SETTINGS = 'CLEAR_FILTERS_SETTINGS';

type ReceiveSetFiltersSettingsActionType = {
  payload: FiltersType;
  type: typeof SET_FILTERS_SETTINGS;
};

type ReceiveClearFiltersSettingsActionType = {
  type: typeof CLEAR_FILTERS_SETTINGS;
};

export type SetFiltersSettingsActionsType = ReceiveSetFiltersSettingsActionType | ReceiveClearFiltersSettingsActionType;

export function setFiltersSettingsActions(filters: FiltersType) {
  return async (dispatch) => {
    dispatch(receiveSetFiltersSettingsSuccess(filters));
  };
}

export function clearFiltersSettings(): ReceiveClearFiltersSettingsActionType {
  return {
    type: CLEAR_FILTERS_SETTINGS,
  };
}

export function receiveSetFiltersSettingsSuccess(payload: FiltersType): ReceiveSetFiltersSettingsActionType {
  return {
    type: SET_FILTERS_SETTINGS,
    payload,
  };
}
