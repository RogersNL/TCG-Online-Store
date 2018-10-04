import React from 'react';
import SideBar from './SideBar';
import PropTypes from 'prop-types';
import Category from './Category';

function Browse(props){

  return (
    <div className='row'>
      {Object.keys(props.setList.sets).map(function(setId) {
        let set = props.setList.sets[setId];
        return <Category name={set.name}
          image={set.logoUrl}
          symbolImage={set.symbolUrl}
          key={setId}
          setId={props.code} />;
      })}
      {props.setList.sets[0].name}
    </div>
  );
}
Browse.propTypes = {
  setList: PropTypes.object
};
export default Browse;
