import React, {Component} from 'react';

class Contact extends Component {

  constructor(){
    super()
    console.log('2nd child: constructor of contact')
  }

  componentDidMount() {
    console.log('2nd child: mount of contact')
  }
 
  componentDidUpdate() {
    console.log('2nd child: update of contact')
  }

  render() {
    console.log('2nd child: render of contract')
    return(
      <div>
        <h3>Contact Me</h3>
      </div>
    )
  }
}

export default Contact;