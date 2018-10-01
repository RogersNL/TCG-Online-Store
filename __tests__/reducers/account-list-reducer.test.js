import accountListReducer from './../../src/reducers/account-list-reducer';
import constants from './../../src/constants';
const { c } = constants;

describe("accountListReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(accountListReducer({}, { type: null })).toEqual({});
  });
});
