import React from 'react';

import './style.css';
import Blogpost from '../../components/Blogpost';
import Sidebar from '../../components/Sidebar';

const Post = (props) => {
  return (
    <section className="container">
      <Blogpost />
      <Sidebar />
    </section>
  );
};

export default Post;
