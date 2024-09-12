import React, {useState} from 'react'

const Section = ({description, clickHandler, show}) => {

  function clickedHandler() {
    clickHandler()
  }
  return(
    <>
      <button onClick={clickedHandler}>{show ? 'hide': 'show'}</button>
      {
        show && 
        <p>{description}</p>
      }
    </>
  )
}

const Contact = () => {
  const [showSection1, setshowSection1] = useState(false);
  const [showSection2, setshowSection2] = useState(false);
  const [showSection3, setshowSection3] = useState(false);

  function section1ClickHandler() {
    setshowSection1(!showSection1);
    setshowSection2(false);
    setshowSection3(false);
  }

  function section2ClickHandler(){
    setshowSection2(!showSection2);
    setshowSection1(false);
    setshowSection3(false);
  }

  function section3ClickHandler(){
    setshowSection3(!showSection3);
    setshowSection2(false);
    setshowSection1(false);
  }

  return (
    <div>
        <Section show={showSection1} clickHandler = {section1ClickHandler} description={'I am description 1'}/>
      <br/>
        <Section show={showSection2} clickHandler = {section2ClickHandler} description={'I am description 2'}/>
      <br/>
        <Section show={showSection3} clickHandler = {section3ClickHandler} description={'I am description 3'}/>
    </div>
  )
}

export default Contact
