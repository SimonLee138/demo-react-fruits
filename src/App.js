import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{cartItems, setCartItems}}>
          <Link to="/">Main page</Link>
          <Link to="/checkout">shopcart</Link>

          <Routes>
            <Route path="/" element={<ProductList></ProductList>}></Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/product" element={<ProductDetail></ProductDetail>}>
              <Route path=':id' element={<ProductDetail></ProductDetail>}></Route>
            </Route>
            <Route path="*" element={<p>page not found</p>}></Route>
          </Routes>
        </CartContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
