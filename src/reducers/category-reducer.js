import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newSets;
  switch (action.type) {
  case c.SELECT_SET:
    return action.selectedCategory;
  case c.REQUEST_CARDS:
    newSets = {
      isFetching: true
    };
    return newSets;
  case c.RECEIVE_CARDS:
    newSets = Object.assign({}, state, {
      isFetching: false,
      cards: action.cardList
    });
    return newSets;
  default:
    return state;
  }
};
