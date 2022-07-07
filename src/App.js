import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Contacto from './components/Pages/Contacto';
import Nosotros from './components/Pages/Nosotros';
import FAQ from './components/Pages/FAQ';
import Detalle from './components/Pages/Detalle';
import ProductList from './components/Pages/ProductList';
import Cart from './components/Pages/Cart';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contacto />} />
            <Route path='/FAQ' element={<FAQ />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products/:category' element={<ProductList />} />
            <Route path='/product/:id' element={<Detalle />} />
            <Route path='*' element={<h1>404 - Página no encontrada </h1>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
