import * as React from 'react';
import classes from './item-category.module.scss';

const ItemCategoryComponent:React.FC = () => (
  <div className={classes.category_container}>
    <h2>Shop</h2>
    <ul>
      <a href="/">
        <li>T-shirts</li>
      </a>
      <a href="/">
        <li>Hoodies</li>
      </a>
      <a href="/">
        <li>Posters</li>
      </a>
      <a href="/">
        <li>Albums</li>
      </a>
    </ul>
  </div>
  );

export default ItemCategoryComponent;
