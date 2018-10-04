import itemReducer from './item-reducer';
import accountReducer from './account-reducer';
import accountListReducer from './account-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  itemList: itemReducer,
  masterAccountList: accountListReducer,
  selectedAccount: accountReducer
});

export default rootReducer;
