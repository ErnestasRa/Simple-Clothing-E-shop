import * as React from 'react';
import uniqid from 'uniqid';
import classes from './item-category.module.scss';
import { shopCategories } from '../../shop-info';

const ItemCategoryComponent:React.FC = () => (
  <div className={classes.category_container}>
    <h2>Shop</h2>
    <ul>
      {shopCategories.map((category) => (
        <li key={uniqid()}>
          <a href={category.href}>{category.name}</a>
        </li>
))}
    </ul>
  </div>
  );

export default ItemCategoryComponent;
