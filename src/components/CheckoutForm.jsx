import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutForm() {
  return (
    <div>
      <h2>Checkout</h2>
      <Link to="order-confirmation"><button className="btn btn-primary">Submit Order!</button></Link>
    </div>
  );
}

export default CheckoutForm;
