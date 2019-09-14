import React from 'react';
import { Link } from 'gatsby';

import headerStyle from './header.module.scss';

const Header = () => {
  return (
    <div id="header" className={headerStyle.header}>
      <h1>
        <Link to="/" className={headerStyle.title}>Valeria's Page</Link>
      </h1>
      <nav>
        <ul className={headerStyle.navList}>
          <li><Link to="/blog" className={headerStyle.navItem}>blog</Link></li>
          <li><Link to="/about" className={headerStyle.navItem}>about</Link></li>
          <li><Link to="/contact" className={headerStyle.navItem}>contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
