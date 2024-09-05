import React from "react";

import Profile from "./Profile";
import Contact from "./Contact";

//in order to run class components and check its life cycle flow, 
//just render the about component in the render method of react-dom in index.js file.
//and check console.logs to check the life cycle mthods flow.

class About extends React.Component {
  constructor(){
    // console.log('propssss', props)
    //why we call super in constructor
    //why we call super with props in constructor
    super()

    console.log('Parent:Above constructor')

    this.state = {
      name: 'ali hassan majeed gunda'
    }
  }

  componentDidMount(){
    console.log('Parent:Above componentDidMount')
  }

  componentDidUpdate(){
    console.log('Parent:Above update')
  }

  render() {
    console.log('Parent:Above i am render of class')
    return (
      <div>
        <h3>Learning Class Component</h3>
        <p>I am {this.props.name}</p>
        <p>My freind is {this.state.name}</p>
        <button onClick={() => this.setState({name: 'Abdul Wahab Chaoudhry'})}>Change Name</button>
        <Profile/>
        <Contact/>
      </div>
    )
  }
}

export default About;