import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
          <img
        className='logo'  
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDMszOev5meVUs0m-AF8BOYHncIJYhfgg0A&s"
        alt="Food App Logo"
         />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;