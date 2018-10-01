import React from 'react';
import { Link } from 'react-router-dom';

function Cart(){
  return (
    <div>
      <h2>My Cart</h2>
      <Link to="/checkout"><button className="btn btn-success">Checkout!</button></Link>
    </div>
  );
}

export default Cart;
