import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../../components/UI/Card/index';
import blogPost from '../../data/blog.json';

import './style.css';

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

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
        <div className="cardBody">
          <p className="personalBio">
            My name is Jorge. I am a Journalist and Full Stack Developer based
            in Buenos Aires, Argentina. Basically i am here to tell you what is
            going on around the world with an independent perspective.
          </p>
        </div>
      </Card>
      <Card
        style={{
          marginBottom: '20px',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>
      <Card
        style={{
          marginBottom: '20px',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>
        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/post/${post.id}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
