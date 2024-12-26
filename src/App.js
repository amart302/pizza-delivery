import { Routes, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/main/Main';
import Basket from './pages/basket/Basket';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/basket" element={<Basket />}/>
    </Routes>
  );
}

export default App;
