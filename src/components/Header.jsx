import { Link } from 'react-router-dom';
import './Header.css';

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <Link className="store-link" to="/">
          <h1>{storeName}</h1>
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>

        <Link className="cart-container" to="/cart" aria-label="View shopping cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
