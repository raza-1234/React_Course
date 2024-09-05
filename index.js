import React from "react";
import ReactDOM from 'react-dom/client';

import App from "./src/App"

// const h1 = React.createElement('h1', {}, 'heading 1')
// const h2 = React.createElement('h2', {}, 'heading 2')
// const h3 = React.createElement('h3', {}, 'heading 2')
// const div = React.createElement('div', {class: 'title'}, [h1, h2, h3])

// const divWithHeadings = (
//     <div className="title">
//         <App/>
//         <h1>Heading 1</h1>
//         <h2>Heading 2</h2>
//         <h3>Heading 3</h3>
//     </div>
// )

//component name should start with capital letter.
// const DivWithHeadings = () => {
//     return (
//         <div className ="title">
//             <App/>
//             <h1>Heading 1</h1>
//             <h2>Heading 2</h2>
//             <h3>Heading 3</h3>
//         </div>
//     )
// }

const root = document.getElementById('root')
const reactRoot = ReactDOM.createRoot(root)
reactRoot.render(<App/>)