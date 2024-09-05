import React, {useState} from 'react'
import Navbar from './Navbar';

const Header = () => {

  const [flag, setFlag] = useState(false);

  return (
    <>
      <h2>I am Header component</h2>
      <button onClick={() => setFlag(!flag)}>
        change flag value
      </button>
      <Navbar flag={flag}/>
      <p id={flag + 'id'}>hello</p>
    </>
  )
}

export default Header;
