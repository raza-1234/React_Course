import React, {useContext} from 'react';

import UserContext from '../context/UserContext'

const Footer = () => {
  const {userId, setUserId} = useContext(UserContext);

  return (
    <footer className='footer'>
      <p>Resturant to be build soon</p>
      <input value={userId} onChange={(e) => {
        setUserId(e.target.value)
      }}/>
    </footer>
  )
}

export default Footer
