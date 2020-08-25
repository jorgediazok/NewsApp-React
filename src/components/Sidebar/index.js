import React from 'react';
import Card from '../../components/UI/Card/index';

import './style.css';

const Sidebar = (props) => {
  return (
    <div className="sidebarContainer">
      <Card
        style={{
          marginBottom: '20px',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img
            src="https://avatars1.githubusercontent.com/u/47897689?s=400&u=0bb395d093ce35cd806306d0c62b1d86aebfbaa1&v=4"
            alt="JorgeDv"
          />
        </div>
      </Card>
      <Card>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
