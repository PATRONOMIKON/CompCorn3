import { Link } from 'react-router-dom';
import './Hero.css';

function Hero({ title, subtitle, buttonText, buttonLink = '/products' }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Link className="hero-button" to={buttonLink}>{buttonText}</Link>
      </div>
    </section>
  );
}

export default Hero;
