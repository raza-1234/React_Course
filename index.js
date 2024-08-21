import React from "react";
import ReactDOM from 'react-dom/client';

const root = document.getElementById('root')
const paragraphTag = React.createElement('p', {}, 'Hello from me(react) instead of js ...')
const reactRoot = ReactDOM.createRoot(root)
reactRoot.render(paragraphTag)