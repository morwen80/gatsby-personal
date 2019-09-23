import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyle from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
    }
  `)
  return (
    <div id="header" className={headerStyle.header}>
      <h1>
        <Link to="/" className={headerStyle.title}>{data.site.siteMetadata.title}</Link>
      </h1>
      <nav>
        <ul className={headerStyle.navList}>
          <li><Link to="/blog" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>blog</Link></li>
          <li><Link to="/about" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>about</Link></li>
          <li><Link to="/contact" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
