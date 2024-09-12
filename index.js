import './index.css';

import React, {lazy, Suspense} from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import About from "./src/components/About";
import Profile from './src/components/Profile';
import Contact from './src/components/Contact';
import ErrorPage from './src/components/ErrorPage';
import AppLayout from './src/components/Layout';
import App from './src/App';
import { lazy } from 'react';

//lazy loading
//dynamic loading
//dynamic import

const About = lazy(() => {
  console.log('ppppp', import('./src/components/About'))
  return import('./src/components/About')
})
console.log('>>>>>>', About)

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '',
        element: <App/>
      },
      {
        path: 'about',
        element: < Suspense fallback={<p>abhi lazy load ho rahi hain changes</p>}><About/></Suspense>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'profile',
        element: <Profile/>
      }
    ]
  }
])

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
reactRoot.render(<RouterProvider router={router}/>)