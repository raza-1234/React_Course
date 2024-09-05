import React from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';
import logo from '../assets/resturant-logo.jpg';

const Header = () => {
  return (
    <div className='header container'>
      <Link to='/'>
        <img src={logo} alt='logo'/>
      </Link>
      <div className='header-menu'>
        <Menu/>
      </div>
    </div>
  )
}

export default Header;
