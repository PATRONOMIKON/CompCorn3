import ProductCard from '../components/ProductCard';

function ProductsPage({ products, addToCart }) {
  return (
    <main>
      <section className="products-section">
        <h2>Our Products</h2>
        <p className="page-intro">Browse our selection of gaming and tech accessories.</p>

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
    </main>
  );
}

export default ProductsPage;
