import React from 'react';
import PropTypes from 'prop-types';

function Category(props){
  return (
    <div className='category col-md-4'>
      <div className='card'>
        <img className='card-img-top' src={props.image}/>
        <div className='card-body row align-items-center'>
          <img className='symbol' src={props.symbolImage}/>
          <h2>{props.name}</h2>
        </div>
      </div>
      <style jsx>{`
        .category {
          margin-left:100px;
        }
        h2 {
          text-align: center;
        }
        .card-img-top {
          width:100%;
        }
        .symbol {
          width:40px;
          float: left;
        }
        .card {
          min-height: 300px;
        }
      `}</style>
    </div>
  );
}
Category.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  symbolImage: PropTypes.string
};
export default Category;
