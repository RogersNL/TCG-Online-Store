import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutAccount } from './../actions';

function NavHeader(props){
  function handleLogOutFormSubmission(){
    const { dispatch } = props;
    dispatch(logoutAccount());
  }
  let visibleLinks = null;
  if(props.account.name) {
    visibleLinks =
      <ul className="navbar-nav">
        <li className="nav-link">Welcome, {props.account.name}</li>
        <li className="nav-item">
          <Link className="nav-link" to="/account">Account</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">My Cart</Link>
        </li>
        <li className="nav-link">
          <form onSubmit={handleLogOutFormSubmission}>
            <button type='submit' className='btn btn-secondary'>Log Out</button>
          </form></li>
      </ul>
  } else {
    visibleLinks=
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/sign-in">Sign in</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>
    </ul>
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Pokemon Trading Card Store</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/browse">Browse</Link>
            </li>
        
          </ul>
          {visibleLinks}
        </div>
      </nav>
    </div>
  );
}
NavHeader.propTypes = {
  account: PropTypes.object
}
export default connect()(NavHeader);
