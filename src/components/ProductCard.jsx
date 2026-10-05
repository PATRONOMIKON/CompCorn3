import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h2><Link className="product-name-link" to={`/products/${product.id}`}>{product.name}</Link></h2>

        <p className="product-description">
          {product.description}
        </p>

        <p className="product-price">
          ${product.price.toFixed(2)}
        </p>

        <Link className="details-link" to={`/products/${product.id}`}>View Details</Link>

        <button
          className="product-button"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;