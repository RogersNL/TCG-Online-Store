import accountReducer from './../../src/reducers/account-reducer';
import constants from './../../src/constants';
const { c } = constants;

describe("accountReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(accountReducer({}, { type: null })).toEqual({});
  });
});
