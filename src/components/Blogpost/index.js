import React from 'react';
import Card from '../../components/UI/Card/index';

import './style.css';

const Blogpost = (props) => {
  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">Beautiful is always beautiful.</h1>
          <span className="postedBy">
            posted on August 25, 2020 by Jorge Dv
          </span>
        </div>
        <div className="postImageContainer">
          <img
            // @ts-ignore
            src={require('../../blogPostImages/memories-from.jpg')}
            alt="memo"
          />
        </div>
      </Card>
    </div>
  );
};

export default Blogpost;
