import React from 'react'
import contactSlice from '../store/slices/contactSlice';
import { useSelector } from 'react-redux';

const About = () => {
  const names = useSelector(store => store.contact.names);
  console.log('namessssss', names)

  return (
    <div>
      <p>I am about</p>
      {
        names.map((name, index) => {
          <li key={index}>
            {name}
          </li>
        })
      }
    </div>
  )
}

export default About
