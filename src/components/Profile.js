import React from "react";

class Profile extends React.Component {

  constructor(props){
    super(props)
    console.log('child:Profile constructor')
  }

  componentDidMount() {
    console.log('child:Profile didMount')
  }

  componentDidUpdate(){
    console.log('child:Profile update')
  }

  render() {
    console.log('child:Profile render')

    return (
      <div>
        <h3>I am Profile class component.</h3>
        <p>My age is {this.props.age}</p>
        {/* <p>My child freind profile is {this.props.name}</p> */}
      </div>
    )
  }
}

export default Profile;