import * as React from 'react';
import uniqid from 'uniqid';
import classes from './cart-container.module.scss';
import CartItemContainer from '../cart-item/cart-item';
import CartContext from '../../../context/cartContext';
import CartContainerTitle from '../cart-container-title/cart-container-title';

const CartContainerComponent:React.FC = () => {
    const { cart } = React.useContext(CartContext);

return (
  <div>
    <CartContainerTitle />
    <div className={classes.cart_container}>
      {cart.map((data) => (
        <CartItemContainer
          description={data.description}
          image={data.image}
          name={data.name}
          price={data.price}
          key={uniqid()}
          removeFromCart={() => console.log('hi')}
        />
))}
    </div>
  </div>
  );
};
export default CartContainerComponent;
