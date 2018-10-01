import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmCheckout(){
  return (
    <div>
      <h2>Order Confirmation</h2>
      <div>Thank you for your order!</div>
      <div><Link to="/">Back to Home</Link></div>
      <div><Link to="/browse">Back to Browse</Link></div>
      <div><Link to="/order-history">View Order History</Link></div>
    </div>
  );
}

export default ConfirmCheckout;
