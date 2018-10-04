import React from 'react';
import SideBar from './SideBar';
import PropTypes from 'prop-types';

function Browse(props){

  return (
    <div>
      <SideBar/>
      {Object.keys(this.props.setList).map(function())}
    </div>
  );
}
Browse.propTypes = {
  setList: PropTypes.object
}
export default Browse;
