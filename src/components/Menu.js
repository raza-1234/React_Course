import React from 'react'

import { Link } from 'react-router-dom'

const Menu = () => {
  const menuList = [
    {
      id: 1,
      menu: 'home',
      path: '/'
    },
    {
      id: 2,
      menu: 'about',
      path: '/about'
    },
    {
      id: 3,
      menu: 'contact',
      path: '/contact'
    },
    {
      id: 4,
      menu: 'profile',
      path: '/profile'
    }
  ] 
  return (
    <ul className='menu-list'>
      {
        menuList.map((menu) => (
          <Link key={menu.id} to={menu.path}>
            <li className='menu-item'>{menu.menu}</li>
          </Link>
        ))
      }
    </ul>
  )
}

export default Menu
