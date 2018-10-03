import React from 'react';
import SideBar from './SideBar';

function Browse(){
  function testApi(){
    dispatch(fetchSetList());
  }
  return (
    <div>
      <SideBar/>
      <button className='btn btn-danger' onClick={testApi}>Test</button>
    </div>
  );
}

export default Browse;
