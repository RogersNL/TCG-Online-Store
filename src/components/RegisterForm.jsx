import React from 'react';
import { addAccount } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function RegisterForm(props) {
  let _name = null;
  let _username = null;
  let _email = null;
  let _password = null;
  let _passwordconfirm = null;

  function handleAddingNewAccountFormSubmission(event){
    props.onValidatingForm(_name.value, _username.value, _email.value, _password.value, _passwordconfirm.value);
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addAccount(_name.value, _username.value, _email.value, _password.value, {}, {}));
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
RegisterForm.propTypes = {
  onValidatingForm: PropTypes.func
};

RegisterForm = connect()(RegisterForm);

export default RegisterForm;
