import React from 'react';
import { createAccount } from './../actions';
import { connect } from 'react-redux';

function RegisterForm(props) {
  let _name = null;
  let _username = null;
  let _email = null;
  let _password = null;
  let _passwordconfirm = null;

  function handleAddingNewAccountFormSubmission(event){
    const { dispatch } = props;
    event.preventDefault();
    dispatch(createAccount(_name.value, _username.value, _email.value, _password.value, 0, {}, {}));
    _name.value = '';
    _username.value = '';
    _email.value = '';
    _password.value = '';
    _passwordconfirm.value = '';
  }
  return (
    <div>
      <form onSubmit={handleAddingNewAccountFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}
          className='form-control'/>
        <input
          type='text'
          id='username'
          placeholder='Username'
          ref={(input) => {_username = input;}}
          className='form-control'/>
        <input
          type='text'
          id='email'
          placeholder='Email'
          ref={(input) => {_email = input;}}
          className='form-control'/>
        <input
          type='password'
          id='password'
          placeholder='Password'
          ref={(input) => {_password = input;}}
          className='form-control'/>
        <input
          type='password'
          id='passwordconfirm'
          placeholder='Confirm Password'
          ref={(input) => {_passwordconfirm = input;}}
          className='form-control'/>
        <button className='btn btn-info' type='submit'>Create Account</button>
      </form>
    </div>
  );
}
RegisterForm = connect()(RegisterForm);

export default RegisterForm;
