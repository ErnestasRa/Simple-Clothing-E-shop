import * as React from 'react';
import ItemCategoryComponent from './components/item-category/item-category';
import NavbarComponent from './components/navbar/navbar';
import './styles/index.scss';

const App:React.FC = () => (
  <div className="App">
    <NavbarComponent />
    <ItemCategoryComponent />
  </div>
  );

export default App;
