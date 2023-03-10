import * as React from 'react';
import classes from './single-item.module.scss';

type SingleItemContainerType = {
    image: string,
    name: string,
    description: string,
    price: string
    addToCart: VoidFunction
};

const SingleItemContainer:React.FC<SingleItemContainerType> = ({
    image,
    name,
    description,
    price,
    addToCart,
}) => (
  <div className={classes.Single_item}>
    <img alt="img" src={image} />
    <h3>{name}</h3>
    <p>{description}</p>
    <span>
      $
      {price}
    </span>
    <button onClick={() => addToCart()}>Add to cart</button>
  </div>
  );

export default SingleItemContainer;
