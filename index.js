import React from "react";
import ReactDOM from 'react-dom/client'

const paraId = document.getElementById("paraId");
paraId.innerHTML = "hello chansuuu ....";

const root = document.getElementById('root')
const paragraph = React.createElement('p', {}, 'Hello from me(react) instead of js ...')
const reactRoot = ReactDOM.createRoot(root)
reactRoot.render( paragraph )
