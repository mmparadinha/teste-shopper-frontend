import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo, useState } from 'react';
import GlobalStyle from './GlobalStyle';
import Homepage from './homepage/Homepage';
import CartContext from '../contexts/CartContext';

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('shopper-cart')) || []);
  const cartInfo = useMemo(() => ({ cart, setCart }), [cart, setCart]);

  return (
    <>
      <GlobalStyle />
      <CartContext.Provider value={cartInfo}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
