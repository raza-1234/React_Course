import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';
import logo from '../assets/resturant-logo.jpg';
import UserContext from '../context/UserContext';

const Header = () => {
  const {userName, setUserName} = useContext(UserContext); 

  return (
    <div className='header container'>
      <Link to='/'>
        <img src={logo} alt='logo'/>
      </Link>
      <div className='header-menu'>
        <Menu/>
      </div>
      <p>Name in header: {userName}</p>
      <input value={userName} 
        onChange={(e) => {
          setUserName(e.target.value)
        }}
      />
    </div>
  )
}

export default Header;
