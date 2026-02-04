import React, { useEffect } from 'react';
import '../Homepage/Homepage.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.min.js'

const Homepage = () => {
  useEffect(() => {
    // Initialize any required scripts
  }, []);

  return (
    <div className="homepage">

      {/* carousel section */}
      <section className="hero mx-3 mt-4">
        <div id="propertyCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#propertyCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#propertyCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#propertyCarousel" data-bs-slide-to="2"></button>
          </div>
          
          {/* Slides */}
          <div className="carousel-inner">
            {/* Slide 1 - Elegant Jewelry Collection */}
            <div className="carousel-item active">
              <div className="hero-content">
                <h2>Discover Timeless Elegance</h2>
                <p>Premium Diamond & Gold Collection</p>
                <p className="price">Starting from $299</p>
                <Link to="/properties" className="cta-button">Shop Now</Link>
              </div>
            </div>

            {/* Slide 2 - Luxury Pieces */}
            <div className="carousel-item">
              <div className="hero-content">
                <h2>Luxury Handcrafted Jewelry</h2>
                <p>Exquisite Designer Pieces</p>
                <p className="price">Starting from $499</p>
                <Link to="/properties" className="cta-button">Explore Collection</Link>
              </div>
            </div>

            {/* Slide 3 - Wedding Collection */}
            <div className="carousel-item">
              <div className="hero-content">
                <h2>Perfect Wedding Rings</h2>
                <p>Celebrate Your Special Moments</p>
                <p className="price">Starting from $799</p>
                <Link to="/properties" className="cta-button">View Collection</Link>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button className="carousel-control-prev" type="button" data-bs-target="#propertyCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#propertyCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Premium jewelry with exceptional service</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💎</div>
              <h3>Certified Quality</h3>
              <p>All our jewelry pieces come with authenticity certificates and quality guarantees.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Custom Design</h3>
              <p>Create your dream piece with our expert craftsmen and designers.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Enjoy free worldwide shipping on all orders with secure packaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="agents" className="agents">
        <div className="container">
          <h2 className="section-title">Meet Our Experts</h2>
          <p className="section-subtitle">Passionate craftsmen and designers at your service</p>

          <div className="agents-grid">
            <div className="agent-card">
              <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Master Jeweler" />
              <h3>Elena Rodriguez</h3>
              <p>Master Jeweler</p>
              <div className="social-links">
                <Link><i className="bi bi-linkedin"></i></Link>
                <Link><i className="bi bi-envelope"></i></Link>
              </div>
            </div>

            <div className="agent-card">
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Chief Designer" />
              <h3>Michael Chen</h3>
              <p>Chief Designer</p>
              <div className="social-links">
                <Link><i className="bi bi-linkedin"></i></Link>
                <Link><i className="bi bi-envelope"></i></Link>
              </div>
            </div>

            <div className="agent-card">
              <img src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gemologist" />
              <h3>Sarah Williams</h3>
              <p>Certified Gemologist</p>
              <div className="social-links">
                <Link><i className="bi bi-linkedin"></i></Link>
                <Link><i className="bi bi-envelope"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">Customer Reviews</h2>
          <p className="section-subtitle">What our happy customers say</p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <p>"Absolutely stunning engagement ring! The quality is exceptional and the customer service was outstanding. My fiance loves it!"</p>
              <div className="client-info">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Happy Customer" />
                <div>
                  <h4>James Anderson</h4>
                  <p>Verified Buyer</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <p>"Best jewelry shopping experience! The custom design service helped me create a unique necklace that exceeded my expectations."</p>
              <div className="client-info">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Happy Customer" />
                <div>
                  <h4>Emma Thompson</h4>
                  <p>Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>ShopJewels</h3>
              <p>Your trusted jewelry destination since 2015.</p>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>info@shopjewels.com</p>
              <p>+254 721 799055</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link>About Us</Link>
              <Link>Collections</Link>
              <Link>Custom Design</Link>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} ShopJewels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;