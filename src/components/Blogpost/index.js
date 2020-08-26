import React, { useState, useEffect } from 'react';
import Card from '../../components/UI/Card/index';
import blogPost from '../../data/blog.json';

import './style.css';

const Blogpost = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const postId = props.match.params.postId;
    console.log(blogPost);
    const post = blogPost.data.find((post) => post.id === postId);
    setPost(post);
  }, [props.match.params.postId]);

  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">{post.author}</h1>
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
        <div className="postContent">
          <h3>Post Title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            doloremque beatae voluptatibus ea voluptas, possimus a architecto
            sed tenetur voluptates quaerat soluta enim at commodi perferendis
            officiis sit deserunt unde.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Blogpost;
