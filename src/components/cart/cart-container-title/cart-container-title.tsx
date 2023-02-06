import * as React from 'react';
import classes from './cart-container-title.module.scss';
// import CartContext from '../../context/cartContext';

const CartContainerTitle:React.FC = () => (
  <div className={classes.title}>
    <h2>Cart</h2>
    <p>Total: $0</p>
  </div>
  );
export default CartContainerTitle;
