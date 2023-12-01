import React from 'react'
import { Link } from 'react-router-dom';
import "./sidebar.css";

import TwitterLogo from '../../assets/imgs/twitter-logo-4 1.svg'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={TwitterLogo} alt="twitter-logo" />
      </Link>

      <ul className="sidebar__menu">
        <li className="sidebar__menu-list">
          <i class="fa-solid fa-house"></i> <Link to="/home">Home</Link>
        </li>
        <li className="sidebar__menu-list">
          <i class="fa-solid fa-hashtag"></i> <Link to="/explore">Explore</Link>
        </li>
        <li className="sidebar__menu-list">
          <i class="fa-regular fa-bell"></i>{" "}
          <Link to="/notifications">Notifications</Link>
        </li>
        <li className="sidebar__menu-list">
          <i class="fa-regular fa-envelope"></i>{" "}
          <Link to="/messages">Messages</Link>
        </li>
        <li className="sidebar__menu-list">
          <i class="fa-regular fa-bookmark"></i>{" "}
          <Link to="/bookmarks">Bookmarks</Link>
        </li>
        <li className="sidebar__menu-list">
          <i class="fa-solid fa-list"></i> <Link to="/lists">Lists</Link>
        </li>
        <li className="sidebar__menu-list">
          <i class="fa-regular fa-user"></i>
          <Link to="/profile">Profile</Link>
        </li>
        <li className="sidebar__menu-list">
          <i class="fa-solid fa-circle-right"></i>{" "}
          <Link to="/more">More</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar