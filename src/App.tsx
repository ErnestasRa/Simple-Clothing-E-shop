/* eslint-disable react/jsx-no-constructed-context-values */
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
import CartContext from './context/cartContext';
import getData from './functions/fetchData';

const App:React.FC = () => {
  const [items, setItems] = React.useState<ItemType[]>([]);
  const [cart, setCartItems] = React.useState<ItemType[]>([]);

  React.useEffect(() => {
    getData('getitems', setItems);
    getData('cartitems', setCartItems);
  }, []);

return (
  <ItemContext.Provider value={{ items, setItems }}>
    <CartContext.Provider value={{ cart, setCartItems }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  </ItemContext.Provider>
  );
};
export default App;
