import * as React from 'react';
import uniqid from 'uniqid';
import classes from './navbar.module.scss';
import { header } from '../../shop-info';
import CartContext from '../../context/cartContext';

const NavbarComponent: React.FC = () => {
  const { cart } = React.useContext(CartContext);

return (
  <div className={classes.navbar_container} id="#nav">
    <h3>
      <a href={header.homepage}>
        {header.tile}
      </a>
    </h3>
    <nav>
      <ul>
        {header.navigation.map((nav) => <li key={uniqid()}><a href={nav.to}>{nav.name}</a></li>)}
        <li key={uniqid()}>
          <a href="/cart">
            cart
            {' '}
            (
            {cart.length}
            )
          </a>
        </li>
      </ul>
    </nav>
  </div>
  );
};
export default NavbarComponent;
