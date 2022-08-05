import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about/anil">About</Link>
        <Link to="/redux">REdux</Link>
        <Link to="/hoc">HOC</Link>
        <Link to="/axios">Axios</Link>
        <Link to="/bookstore">Book Store</Link>
      </nav>
    </div>
  )
}

export default Header