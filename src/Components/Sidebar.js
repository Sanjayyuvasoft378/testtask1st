import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/home">
        Home
      </a>
      <a className="menu-item" href="/about">
        About Us
      </a>
      <a className="menu-item" href="/dashboard">
        Dashboard
      </a>
      <a className="menu-item" href="/logout">
        Logout
      </a>
    </Menu>
  );
};