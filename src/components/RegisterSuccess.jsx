import React from 'react';
import { Link } from 'react-router-dom';

function RegisterSuccess(){
  return (
    <div>
      <div>Account Registered!</div>
      <Link to="sign-in"><button className="btn btn-primary">Log In</button></Link>

    </div>
  );
}

export default RegisterSuccess;
