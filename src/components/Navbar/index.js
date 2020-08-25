import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = (props) => {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert('FUCK');
  };

  const openSearch = () => {
    setSearch(true);
  };

  const searchClass = search ? 'searchInput active' : 'searchInput';

  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/post">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" placeholder="Search" className={searchClass} />
          <img
            onClick={openSearch}
            className="searchIcon"
            // @ts-ignore
            src={require('../../assets/icons/search.png')}
            alt="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
