import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div id="header">
      <h1>Valeria's Page</h1>
      <nav>
        <Link to="/blog">blog</Link> |
        <Link to="/about">about</Link> |
        <Link to="/contact">contact</Link>
      </nav>
    </div>
  )
}

export default Header
