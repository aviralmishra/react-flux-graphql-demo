import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <div className="header clearfix">
    <header>
      <nav>
        <ul className="nav nav-pills pull-right">
          <li role="presentation">
            <Link to='/'>Home</Link>
          </li>
          <li role="presentation">
            <Link to='/albums'>Albums</Link>
          </li>
          <li role="presentation">
            <Link to='/artists'>Artists</Link>
          </li>
        </ul>
      </nav>
      <h3 className="text-muted">
        <span className="glyphicon glyphicon-music" aria-hidden="true"></span>
      </h3>
    </header>
  </div>
);

export default Header;
