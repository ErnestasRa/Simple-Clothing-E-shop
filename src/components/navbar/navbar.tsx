import * as React from 'react';
import classes from './navbar.module.scss';

const NavbarComponent: React.FC = () => (
  <div className={classes.navbar_container} id="#nav">
    <h3>
      Shop
    </h3>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Profile</a>
        </li>
      </ul>
    </nav>
  </div>
  );

export default NavbarComponent;
