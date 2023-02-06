import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import CartPage from './pages/cart-page';
import MainPage from './pages/main-page';
import ProfilePage from './pages/profile-page';
import './styles/index.scss';
import ItemContext from './context/ItemContext';
import { get } from './functions/http';

const App:React.FC = () => {
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
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  <ItemContext.Provider value={{ items, setItems }}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  </ItemContext.Provider>
  );
};
export default App;
