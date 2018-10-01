import React from 'react';
import { Link } from 'react-router-dom';

function Account(){
  return (
    <div>
      <h2>Account</h2>
      <div><Link to="/order-history">Order History</Link></div>
      <div><Link to="/edit-account">Edit Profile</Link></div>
    </div>
  );
}

export default Account;
