import rootReducer from './../../src/reducers/index';
import accountListReducer from './../../src/reducers/account-list-reducer';
import itemReducer from './../../src/reducers/item-reducer';
import accountReducer from './../../src/reducers/account-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterAccountList: {},
      selectedItem: {},
      selectedAccount: {}
    });
  });
  test('Should contain accountListReducer Logic', () => {
    expect(store.getState().masterAccountList).toEqual(accountListReducer(undefined, { type: null }));
  });
  test('Should contain selectedItem Logic', () => {
    expect(store.getState().selectedItem).toEqual(itemReducer(undefined, { type: null }));
  });
  test('Should contain selectedAccount Logic', () => {
    expect(store.getState().selectedAccount).toEqual(accountReducer(undefined, { type: null }));
  });
});
