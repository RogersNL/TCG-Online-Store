import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCardList } from './../actions';

function Category(props){
  function handleSettingSelectedItem(){
    const { dispatch } = props;
    dispatch(fetchCardList(props.setId));
  }
  return (
    <div className='category col-md-4'>
      <Link to={`/browse/${props.name}`}>
        <div onClick={handleSettingSelectedItem} className='card'>
          <img className='card-img-top' src={props.image}/>
          <div className='card-body row align-items-center'>
            <img className='symbol' src={props.symbolImage}/>
            <h2>{props.name}</h2>
          </div>
        </div>
        <style jsx>{`
          h2 {
            text-align: center;
          }
          .card-img-top {
            width:80%;
            margin-left: 10%;
            margin-top: 20px;
          }
          .symbol {
            width:40px;
            float: left;
          }
          .card {
            min-height: 500px;
          }
          .card:hover {
            background-color: #3c6aff;
            cursor: pointer;
          }
        `}</style>
      </Link>
    </div>
  );
}
Category.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  setId: PropTypes.string,
  symbolImage: PropTypes.string
};
export default connect()(Category);
