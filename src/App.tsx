import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MainPage from './pages/global/main-page';
import './styles/index.scss';

const App:React.FC = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );

export default App;
