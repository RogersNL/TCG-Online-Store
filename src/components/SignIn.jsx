import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectAccount } from './../actions';

function SignIn(props){
  let _email = null;
  let _password = null;
  function handleSigningInFormSubmission(){
    const { dispatch } = props;
    Object.keys(props.accountList).map((account) => {
      if(_email.value === props.accountList[account].email && _password.value === props.accountList[account].password){
        dispatch(selectAccount(props.accountList[account]));
      } else {
        console.log('email: ' + _email.value +'Log in failed');
      }
    })
  }
  return (
    <div>
      <form onSubmit={handleSigningInFormSubmission}>
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
        <button type='submit' className='btn btn-success'>Sign in</button>
      </form>
    </div>
  );
}
SignIn.propTypes = {
  accountList: PropTypes.object
}
export default connect()(SignIn);
