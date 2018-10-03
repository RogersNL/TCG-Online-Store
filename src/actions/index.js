import * as types from './../constants/ActionTypes';
import constants from './../constants';
const { firebaseConfig, c } = constants;
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
const accounts = firebase.database().ref('accounts');

export function addAccount(_name, _username, _email, _password, _cart, _orderHistory) {
  return () => accounts.push({
    name: _name,
    username: _username,
    password: _password,
    email: _email,
    cart: _cart,
    orderHistory: _orderHistory
  });
}

export function watchFirebaseAccountsRef() {
  return function(dispatch) {
    accounts.on('child_added', data => {
      const newAccount = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveAccount(newAccount));
    });
  };
}

function receiveAccount(accountFromFirebase) {
  return {
    type: c.RECEIVE_ACCOUNT,
    account: accountFromFirebase
  };
}

export const createAccount = (name, username, email, password, id, cart, orderHistory) => ({
  type: types.ADD_ACCOUNT,
  name,
  username,
  email,
  password,
  id,
  cart,
  orderHistory
});
