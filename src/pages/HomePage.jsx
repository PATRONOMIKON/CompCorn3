import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

// AI-assisted styling/content was used for this page, as permitted by the assignment.
function HomePage() {
  return (
    <main>
      <Hero
        title="Level Up Your Setup"
        subtitle="Discover quality gaming and tech accessories at ComponentCorner."
        buttonText="Shop Now"
        buttonLink="/products"
      />

      <section className="home-section">
        <h2>Why Shop with Us?</h2>
        <div className="benefit-grid">
          <article className="benefit-card">
            <h3>Quality Products</h3>
            <p>Find reliable gaming and computer accessories made for everyday use.</p>
          </article>
          <article className="benefit-card">
            <h3>Easy Shopping</h3>
            <p>Browse products, view details, and add your favorites to one convenient cart.</p>
          </article>
          <article className="benefit-card">
            <h3>Simple Checkout</h3>
            <p>Your cart stays with you as you move between the different pages of our store.</p>
          </article>
        </div>

        <Link className="home-shop-link" to="/products">
          Browse All Products
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
