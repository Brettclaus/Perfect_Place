// NavigationBar.js

import React from 'react';
import './NavigationBar.css'; // Import CSS file for styling

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="dropdown">
        <button className="dropbtn">Menu 1</button>
        <div className="dropdown-content">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Menu 2</button>
        <div className="dropdown-content">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>
      {/* Add more dropdown menus as needed */}
    </div>
  );
};

export default NavigationBar;
