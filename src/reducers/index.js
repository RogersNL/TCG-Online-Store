import categoryListReducer from './category-list-reducer';
import accountReducer from './account-reducer';
import accountListReducer from './account-list-reducer';
import categoryReducer from './category-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  categoryList: categoryListReducer,
  masterAccountList: accountListReducer,
  selectedAccount: accountReducer,
  selectedCategory: categoryReducer
  // selectedItem: itemReducer
});

export default rootReducer;
