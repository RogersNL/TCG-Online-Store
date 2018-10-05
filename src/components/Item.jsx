import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
  return (
    <div>
      <div className='card border-light'>
      <div className='card-body row'>
        <img className='col-md-3 cardimg' src={props.image}/>
        <div className='col-md-9 text-center cardinfo'>
          <div>{props.name}</div>
          <div>Series: {props.series}</div>
          <div>Set: {props.set}</div>
          <div>Price: $11</div>
        </div>
        <button className='btn'></button>
      </div>
    </div>
    <style jsx>{`
      .cardimg {
        width: 100%;
        height: 100%;
      }
      .cardinfo {
        font-size: 50px;
      }
    `}</style>
  </div>
  );
}
Item.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  rarity: PropTypes.string,
  series: PropTypes.string,
  set: PropTypes.string
}
export default Item;
