import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.ADD_ACCOUNT:
    newState = Object.assign({}, state, {
      [id]: {
        name: name,
        username: username,
        email: email,
        password: password,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
