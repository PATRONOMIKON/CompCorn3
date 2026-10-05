import { useEffect, useState } from 'react';
// AI-assisted implementation was used for routing/localStorage setup, as permitted by the assignment.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  // Product data
  const products = [
    {
      id: 1,
      name: 'Mechanical Gaming Keyboard',
      price: 89.99,
      image: 'https://placehold.co/600x400/667eea/ffffff?text=Gaming+Keyboard',
      description:
        'A responsive mechanical keyboard built for gaming and everyday use.',
    },
    {
      id: 2,
      name: 'Wireless Gaming Mouse',
      price: 59.99,
      image: 'https://placehold.co/600x400/764ba2/ffffff?text=Gaming+Mouse',
      description:
        'A lightweight wireless mouse with accurate tracking and long battery life.',
    },
    {
      id: 3,
      name: 'Gaming Headset',
      price: 79.99,
      image: 'https://placehold.co/600x400/4f46e5/ffffff?text=Gaming+Headset',
      description:
        'Immersive sound and a comfortable design for gaming, music, and calls.',
    },
  ];

  // Load the cart from localStorage when the app starts.
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('componentCornerCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save the cart whenever it changes so it persists across navigation and refreshes.
  useEffect(() => {
    localStorage.setItem('componentCornerCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((currentCart) =>
      currentCart.filter((item, itemIndex) => itemIndex !== index)
    );
  };

  return (
    <BrowserRouter>
      <Header storeName="ComponentCorner" cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} addToCart={addToCart} />}
        />
        <Route
          path="/products/:productId"
          element={<ProductDetailPage products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage products={products} cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="(555) 123-4567"
      />
    </BrowserRouter>
  );
}

export default App;
