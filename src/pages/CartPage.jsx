import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

function CartPage({ products, cart, removeFromCart }) {
  // products is passed from App.jsx to match the assignment's page component requirements.
  void products;
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <main>
      <section className="cart-section">
        <h2>Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link className="home-shop-link" to="/products">
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <CartItem
                  key={`${item.id}-${index}`}
                  item={item}
                  onRemove={() => removeFromCart(index)}
                />
              ))}
            </div>

            <div className="cart-summary">
              <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default CartPage;
