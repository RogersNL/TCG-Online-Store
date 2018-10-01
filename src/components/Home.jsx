import React from 'react';

function Home(){
  return (
    <div>
      <div className="jumbotron">
        <h1>O N L I N E S T O R E</h1>
      </div>
      <div className="row">
        <div className="card col-md-4">
          <div className="card-body">
            <h3>Shoes</h3>
            <div><a href="#">Click >></a></div>
          </div>
        </div>
        <div className="card col-md-4">
          <div className="card-body">
            <h3>Pants</h3>
            <div><a href="#">Click >></a></div>
          </div>
        </div>
        <div className="card col-md-4">
          <div className="card-body">
            <h3>Hats</h3>
            <div><a href="#">Click >></a></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card col-md-4">
          <div className="card-body">
            <h3>Electronics</h3>
            <div><a href="#">Click >></a></div>
          </div>
        </div>
        <div className="card col-md-4">
          <div className="card-body">
            <h3>Toys</h3>
            <div><a href="#">Click >></a></div>
          </div>
        </div>
        <div className="card col-md-4">
          <div className="card-body">
            <h3>Seasonal</h3>
            <div><a href="#">Click >></a></div>
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
