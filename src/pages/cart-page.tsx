import * as React from 'react';
import NavbarComponent from '../components/navbar/navbar';
import CartContainerComponent from '../components/cart/cart-container/cart-container';
import FooterComponent from '../components/footer/footer';

const CartPage:React.FC = () => (
  <div>
    <NavbarComponent />
    <CartContainerComponent />
    <FooterComponent />
  </div>
  );
export default CartPage;
