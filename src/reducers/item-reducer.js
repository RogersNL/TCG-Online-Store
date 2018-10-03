import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.REQUEST_SETS:
    newSets = {
      isFetching: true
    }
    return
  default:
    return state;
  }
};
