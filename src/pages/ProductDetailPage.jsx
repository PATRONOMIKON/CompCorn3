import { Link, useParams } from 'react-router-dom';

function ProductDetailPage({ products, addToCart }) {
  const { productId } = useParams();
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return (
      <main className="detail-section">
        <h2>Product Not Found</h2>
        <p>Sorry, we could not find that product.</p>
        <Link className="back-link" to="/products">Back to Products</Link>
      </main>
    );
  }

  return (
    <main className="detail-section">
      <div className="product-detail">
        <img src={product.image} alt={product.name} className="detail-image" />
        <div className="detail-info">
          <p className="detail-label">ComponentCorner Product</p>
          <h2>{product.name}</h2>
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <p className="detail-description">{product.description}</p>
          <button className="product-button" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <Link className="back-link" to="/products">Back to Products</Link>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailPage;
