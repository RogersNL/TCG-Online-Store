import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
  return (
    <div>
      <div className="jumbotron">
        <h1>WELCOME!</h1>
        <h1>Pokemon Trading Card Store</h1>
      </div>
      <div className="">
        <div className="card text-center">
          <div className="card-body">
            <h3>New here? Register Now!</h3>
            <div><Link to='/register'>Register</Link></div>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h3>Existing Users Sign in Here!</h3>
            <div><Link to='/sign-in'>Sign In</Link></div>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h3>Browse Our Selection</h3>
            <div><Link to='/browse'>Browse</Link></div>
          </div>
        </div>
      </div>
      <style jsx>{`
          h1 {
            text-align: center;
          }
          .row {
            margin-bottom: 30px;
          }
          img {
            width: 100%;
            margin-bottom: 30px;
          }
          `}</style>
    </div>
  );
}

export default Home;
