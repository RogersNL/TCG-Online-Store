import accountListReducer from './../../src/reducers/account-list-reducer';
import constants from './../../src/constants';
import * as actions from './../../src/actions';
const { c } = constants;

describe("accountListReducer", () => {
  let action;
  const sampleAccountData = {
    name: 'Nick',
    username: 'amellocello',
    email: 'amellocello@msn.com',
    password: 'test123'
  }
  test('Should return default state if no action type is recognized', () => {
    expect(accountListReducer({}, { type: null })).toEqual({});
  });
  test('Should successfully add new account to masterAccountList', () => {
    action = actions.createAccount('Nick', 'amellocello', 'amellocello@msn.com', 'test123');
  })
});
