import itemReducer from './../../src/reducers/item-reducer';
import constants from './../../src/constants';
const { c } = constants;

describe("itemReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(itemReducer({}, { type: null })).toEqual({});
  });
});
