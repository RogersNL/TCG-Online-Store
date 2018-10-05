import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
  let _quantity = null;
  function handleAddingNewItemToCartFormSubmission(event){
    event.preventDefault();
  }
  return (
    <div>
      <div className='card border-light'>
      <div className='card-body row'>
        <img className='col-md-3 cardimg' src={props.image}/>
        <div className='col-md-6 text-center cardinfo'>
          <div>{props.name}</div>
          <div>Series: {props.series}</div>
          <div>Set: {props.set}</div>
          <div>Price: $11</div>
        </div>
        <form className='col-md-3' onSubmit={handleAddingNewItemToCartFormSubmission}>
          <label htmlFor='quantity'>Enter Quantity to Add to Cart</label>
          <input
            type='number'
            id='quantity'
            placeholder='QTY'
            ref={(input) => {_quantity = input;}}
            className='form-control quantity' />
          <button type='submit' className='btn btn-primary'>Add to Cart</button>
        </form>
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
      .quantity {
        width: 100px;
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
