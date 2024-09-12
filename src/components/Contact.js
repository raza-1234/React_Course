import React, {useState} from 'react'

const Section = ({description, clickHandler, show}) => {

  return(
    <>
      <button onClick={clickHandler}>{show ? 'hide': 'show'}</button>
      {
        show && 
        <p>{description}</p>
      }
    </>
  )
}

const Contact = () => {
  const [showSection, setshowSection] = useState('');

  const sectionsConfig = {
    sectionOne: 'SECTION_1',
    sectionTwo: 'SECTION_2',
    sectionThree: 'SECTION_3'
  }

  const section1ClickHandler = () => {
    if (showSection === sectionsConfig.sectionOne){
      setshowSection('')
      return;
    }
    setshowSection(sectionsConfig.sectionOne)
  }

  const section2ClickHandler = () => {
    if (showSection === sectionsConfig.sectionTwo){
      setshowSection('')
      return;
    }
    setshowSection(sectionsConfig.sectionTwo)
  }

  const section3ClickHandler = () => {
    if (showSection === sectionsConfig.sectionThree){
      setshowSection('')
      return;
    }
    setshowSection(sectionsConfig.sectionThree)
  }

  return (
    <div>
      <Section show={showSection === sectionsConfig.sectionOne} 
        clickHandler = {section1ClickHandler} 
        description={'I am description 1'}
      />
      <br/>
      <Section 
        show={showSection === sectionsConfig.sectionTwo} 
        clickHandler = {section2ClickHandler} 
        description={'I am description 2'}
      />
      <br/>
      <Section 
        show={showSection === sectionsConfig.sectionThree} 
        clickHandler = {section3ClickHandler}
        description={'I am description 3'}
      />
    </div>
  )
}

export default Contact
