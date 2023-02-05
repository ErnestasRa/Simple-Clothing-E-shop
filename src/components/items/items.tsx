import * as React from 'react';
import classes from './items.module.scss';
import SingleItemContainer from './single-item';

type ItemsComponentType = {
  items: ItemType[]
};

const ItemsComponent:React.FC<ItemsComponentType> = ({ items }) => (
  <div className={classes.items_container}>
    {items.map((item) => (
      <SingleItemContainer
        key={item.id}
        description={item.description}
        image={item.image}
        name={item.name}
        price={item.price}
      />
  ))}
  </div>
  );

export default ItemsComponent;
