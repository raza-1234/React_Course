import React from "react";

import Header from "./components/Header";
import About from "./components/About"

const App = () => {
  return (
    <React.Fragment>
      {/* <h1> I am App Component. </h1> */}
      <Header/>
      <About name='ahmed raza butt' age='12'/>
    </React.Fragment>
  );
}

export default App;