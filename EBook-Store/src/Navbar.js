import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <nav className="navi">
    <ul>
      <li>
        <Link to="/About"className="blink">About-Us</Link>
      </li>
      <li>
        <Link to="/Home"className="blink">Home</Link>
      </li>
      <li>
        <Link to="/Contact"className="blink">Contact-Us</Link>
      </li>
      <li>
        <Link to="/Category"className="blink">Book's-Category</Link>
      </li>
      <li>
        <Link to="/"className="blink">Log-Out</Link>
      </li>
    </ul>
  </nav>
  </div>
  )
}

export default Navbar