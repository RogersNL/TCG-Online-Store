import React from 'react';

function SignIn(){
  let _email = null;
  let _password = null;
  return (
    <div>
      <form>
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

export default SignIn;
