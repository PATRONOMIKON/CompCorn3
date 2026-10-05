import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Product data
  const products = [
    {
      id: 1,
      name: "Mechanical Gaming Keyboard",
      price: 89.99,
      image: "https://placehold.co/600x400/667eea/ffffff?text=Gaming+Keyboard",
      description:
        "A responsive mechanical keyboard built for gaming and everyday use.",
    },
    {
      id: 2,
      name: "Wireless Gaming Mouse",
      price: 59.99,
      image: "https://placehold.co/600x400/764ba2/ffffff?text=Gaming+Mouse",
      description:
        "A lightweight wireless mouse with accurate tracking and long battery life.",
    },
    {
      id: 3,
      name: "Gaming Headset",
      price: 79.99,
      image: "https://placehold.co/600x400/4f46e5/ffffff?text=Gaming+Headset",
      description:
        "Immersive sound and a comfortable design for gaming, music, and calls.",
    },
  ];

  // Shopping cart state
  const [cart, setCart] = useState([]);

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  // Remove a product from the cart
  const removeFromCart = (index) => {
    setCart((currentCart) =>
      currentCart.filter((item, itemIndex) => itemIndex !== index)
    );
  };

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Header
        storeName="ComponentCorner"
        cartCount={cart.length}
      />

      <Hero
        title="Level Up Your Setup"
        subtitle="Discover quality gaming and tech accessories at ComponentCorner."
        buttonText="Shop Now"
      />

      <main>
        <section id="products" className="products-section">
          <h2>Featured Products</h2>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        {/* Shopping Cart */}
        <section className="cart-section">
          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item, index) => (
                  <CartItem
                    key={index}
                    item={item}
                    onRemove={() => removeFromCart(index)}
                  />
                ))}
              </div>

              <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
            </>
          )}
        </section>
      </main>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="(555) 123-4567"
      />
    </div>
  );
}

export default App;