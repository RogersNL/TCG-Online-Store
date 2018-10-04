import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newSets;
  switch (action.type) {
  case c.REQUEST_SETS:
    newSets = {
      isFetching: true
    };
    return newSets;
  case c.RECEIVE_SETS:
    newSets = Object.assign({}, state, {
      isFetching: false,
      sets: action.setList
    });
    return newSets;
  default:
    return state;
  }
};
