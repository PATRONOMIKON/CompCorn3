import './Footer.css';

function Footer({ storeName, email, phone }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2>{storeName}</h2>
          <p>Your destination for quality gaming and tech accessories.</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
        </div>

        <div>
          <h3>Store Hours</h3>
          <p>Monday - Friday: 9 AM - 6 PM</p>
          <p>Saturday - Sunday: 10 AM - 4 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 {storeName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;