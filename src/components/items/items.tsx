import * as React from 'react';
import { post } from '../../functions/http';
import classes from './items.module.scss';
import SingleItemContainer from './single-item';
import CartContext from '../../context/cartContext';
import getData from '../../functions/fetchData';

type ItemsComponentType = {
  items: ItemType[]
};

const ItemsComponent:React.FC<ItemsComponentType> = ({ items }) => {
  const { setCartItems } = React.useContext(CartContext);

  const addToCart = async (id: string) => {
    const data = {
      id,
    };
    const res = await post('mycart', data);
    if (res.error) throw new Error('error');
    getData('cartitems', setCartItems);
  };

return (
  <div className={classes.items_container}>
    {items.map((item) => (
      <SingleItemContainer
        key={item.id}
        description={item.description}
        image={item.image}
        name={item.name}
        price={item.price}
        addToCart={() => addToCart(item.id)}
      />
  ))}
  </div>
  );
    };
export default ItemsComponent;
