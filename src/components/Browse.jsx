import React from 'react';
import SideBar from './SideBar';
import PropTypes from 'prop-types';
import Category from './Category';
import { Link } from 'react-router-dom';

function Browse(props){
  let visibleContent = null;
  if(props.setList){
    visibleContent = <div className='row'>
      {Object.keys(props.setList.sets).map(function(setId) {
        let set = props.setList.sets[setId];
        return <Category name={set.name}
          image={set.logoUrl}
          symbolImage={set.symbolUrl}
          key={setId}
          setId={set.code} />;
      })}
    </div>
  } else {
    visibleContent = <div>
      <h3>There doesn't seem to be anything here!</h3>
      <Link to="/">Back to Home</Link>
    </div>
  }
  return (
    <div>
      <SideBar/>
      {visibleContent}
    </div>
  );
}
Browse.propTypes = {
  setList: PropTypes.object
};
export default Browse;
