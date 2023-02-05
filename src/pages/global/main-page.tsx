import * as React from 'react';
import FooterComponent from '../../components/footer/footer';
import ItemCategoryComponent from '../../components/item-category/item-category';
import ItemsComponent from '../../components/items/items';
import NavbarComponent from '../../components/navbar/navbar';
import { get } from '../../functions/http';

const MainPage:React.FC = () => {
  const [items, setItems] = React.useState<ItemType[]>([]);

  const getItems = async () => {
    const res = await get('getitems');
    if (!res.error) setItems(res);
    else throw new Error('Error');
  };

  React.useEffect(() => {
    getItems();
  }, []);

return (
  <div>
    <NavbarComponent />
    <ItemCategoryComponent />
    <ItemsComponent />
    <FooterComponent />
  </div>
  );
};
export default MainPage;
