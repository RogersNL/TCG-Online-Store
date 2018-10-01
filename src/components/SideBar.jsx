import React from 'react';

function SideBar(){
  return (
    <div className="sideBar">
      <a href="#">Category 1</a>
      <a href="#">Category 2</a>
      <a href="#">Category 3</a>
      <a href="#">Category 4</a>
      <a href="#">Category 5</a>
      <a href="#">Category 6</a>
      <style jsx>{`
        .sideBar {
          height: 100%;
          width: 160px;
          position: fixed;
          z-index: 1;
          top: 56;
          left: 0;
          background-color: #f8f9fa;
          overflow-x: hidden;
          padding-top: 20px;
        }
        .sideBar a {
          padding: 6px 8px 6px 16px;
          text-decoration: none;
          font-size: 25px;
          color: #818181;
          display: block;
        }
      `}</style>
    </div>
  );
}

export default SideBar;
