import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
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
  )
}

export default Footer
