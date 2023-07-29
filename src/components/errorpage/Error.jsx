import React from 'react'
import { Link } from 'react-router-dom';
import './error.scss'

const Error = () => {
  return (
    <div className="error" 
    style={{backgroundImage : ""}}
    >
      <h1>Error 404</h1>
      <h2>Oops, Seems like you've lost your path</h2>
      <Link to="/">Click Here</Link>
    </div>
  );
}

export default Error