import { filtersSettingsMock } from '../../__mocks__/articles/filtersSettingsMock';
import { receiveSetFiltersSettingsSuccess } from '../../actions/setFiltersSettingsActions';
import filtersSettingsReducer, { initialState } from './filtersSettings';

const testCases = [
  {
    title: `handles SET_FILTERS_SETTINGS, returns initialState if mockState is undefined`,
    mockAction: receiveSetFiltersSettingsSuccess(filtersSettingsMock),
    mockState: undefined,
    result: filtersSettingsMock,
  },
  {
    title: `handles SET_FILTERS_SETTINGS, returns filtersSetting from response object`,
    mockAction: receiveSetFiltersSettingsSuccess(filtersSettingsMock),
    mockState: initialState,
    result: filtersSettingsMock,
  },
  {
    title: 'handles SET_FILTERS_SETTINGS, returns initialState if response object is null',
    mockAction: receiveSetFiltersSettingsSuccess(null),
    mockState: initialState,
    result: initialState,
  },
];

describe('filtersSettingsReducer', () => {
  testCases.forEach(({ title, mockAction, mockState, result }) => {
    it(title, () => expect(filtersSettingsReducer(mockState, mockAction)).toEqual(result));
  });
});
