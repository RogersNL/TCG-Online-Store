import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const { name, username, email, password, id, cart, orderHistory } = action;
  
  switch (action.type) {
  case c.ADD_ACCOUNT:
    newState = Object.assign({}, state, {
      [id]: {
        name: name,
        username: username,
        email: email,
        password: password,
        id: id,
        cart: cart,
        orderHistory: orderHistory
      }
    });
    return newState;
  default:
    return state;
  }
};
