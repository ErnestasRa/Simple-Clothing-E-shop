import * as React from 'react';
import FooterComponent from '../components/footer/footer';
import ItemCategoryComponent from '../components/item-category/item-category';
import ItemsComponent from '../components/items/items';
import NavbarComponent from '../components/navbar/navbar';
import ItemContext from '../context/ItemContext';
import { post } from '../functions/http';

const MainPage:React.FC = () => {
  const { items, setItems } = React.useContext(ItemContext);

  const getItemsByCategory = async (category:string) => {
    const data = {
      category,
    };
    const res = await post('categoryitem', data);
    if (!res.error) setItems(res);
    else throw new Error('Error');
  };

 return (
   <div>
     <NavbarComponent />
     <ItemCategoryComponent getItemsByCategory={getItemsByCategory} />
     <ItemsComponent items={items} />
     <FooterComponent />
   </div>
  );
 };
export default MainPage;
