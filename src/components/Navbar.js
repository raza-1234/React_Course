import React, {useState, useEffect} from 'react'

const Navbar = ({flag}) => {

  console.log('navbarrrrr 1')

  useEffect(() => {
    console.log('Navbar:child I am use effect of navbar')
  }, [])

  return (
    <div>
      {console.log('navbarrrrr 2')}
      <p>i am navbar</p>
    </div>
  )
}

export default Navbar
