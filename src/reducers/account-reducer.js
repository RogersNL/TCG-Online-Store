import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_ACCOUNT:
    return action.selectedAccount;
  default:
    return state;
  }
};
