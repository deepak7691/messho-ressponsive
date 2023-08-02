
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomeReplace from './HomeReplace';
import Meesho from './Meesho';
import Footer from './Footer';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import PaymentPage from './PaymentPage';
import Login from './Login';
import Register from './Register';

export const MyAppContext = React.createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  const [login, setLogin] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [count, setCount] = useState(0);

  const contextValue = {
    inputValue,
    setInputValue,
    login,
    setLogin,
    cartItem,
    setCartItem,
    count,
    setCount
  };

  return (
    <MyAppContext.Provider value={contextValue}>
      <BrowserRouter>
        <Header />
        
          <Routes>
            <Route path="/" element={<Meesho />} />
            <Route path="/homeReplace/:category" element={<HomeReplace />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      

        <Footer />
      </BrowserRouter>
    </MyAppContext.Provider>
  );
}

export default App;
