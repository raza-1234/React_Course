import React from 'react';

import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h2>404 Error</h2>
      <p>Page does not exist.</p>
      <Link to={'/'}>
        <p>Go to main page.</p>
      </Link>
    </div>
  )
}

export default ErrorPage
