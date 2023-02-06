import * as React from 'react';
import uniqid from 'uniqid';
import classes from './item-category.module.scss';
import { shopCategories } from '../../shop-info';

type ItemCategoryComponentType = {
  getItemsByCategory: (arg0: string) => Promise<void>
};

const ItemCategoryComponent:React.FC<ItemCategoryComponentType> = ({ getItemsByCategory }) => (
  <div className={classes.category_container}>
    <h2>Shop</h2>
    <ul>
      {shopCategories.map((category) => (
        <li key={uniqid()}>
          <button onClick={() => getItemsByCategory(category.category)}>
            {' '}
            {category.name}
          </button>
        </li>
))}
    </ul>
  </div>
  );

export default ItemCategoryComponent;
