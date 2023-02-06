import * as React from 'react';
import classes from './cart-item.module.scss';

type CartItemContainerType = {
    image: string,
    name: string,
    description: string,
    price: string
    removeFromCart: VoidFunction
};

const CartItemContainer:React.FC<CartItemContainerType> = ({
    image,
    name,
    description,
    price,
    removeFromCart,
}) => (
  <div className={classes.Single_item}>
    <img alt="img" src={image} />
    <h3>{name}</h3>
    <p>{description}</p>
    <span>
      $
      {price}
    </span>
    <button onClick={() => removeFromCart()}>Remove from cart</button>
  </div>
  );

export default CartItemContainer;
