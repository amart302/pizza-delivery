import { Routes, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/main/Main';
import Basket from './pages/basket/Basket';
import NotFound from './pages/notFound/NotFound';
import MakingAnOrder from './pages/makingAnOrder/MakingAnOrder';

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />}/>
      <Route path="/" element={<Main />}/>
      <Route path="/basket" element={<Basket />}/>
      <Route path="/makingAnOrder" element={<MakingAnOrder />}/>
    </Routes>
  );
}

export default App;
