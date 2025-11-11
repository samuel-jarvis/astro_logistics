import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/footer_logo.png";

// get current year
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__logo">
                <Link to="/">
                  <p>
                    <span style={{ color: "#fb5521", fontSize: '2rem', fontWeight: 'bold' }}>Astro</span>
                    <span style={{ color: "white", fontSize: '2rem', fontWeight: 'bold' }}>Logistics</span>
                  </p>
                </Link>
              </div>
              <p>
                Welcome to Astro Logistics, Express Shipping & Cargo Solution. Our mission is to provide
                innovative, sustainable solutions for your waste management
                needs.
              </p>
              <div className="footer__social">
                <Link to="/">
                  <span className="social_facebook"></span>
                </Link>
                <Link to="/">
                  <span className="social_twitter"></span>
                </Link>
                <Link to="/">
                  <span className="social_linkedin"></span>
                </Link>
                <Link to="/">
                  <span className="social_pinterest"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h5>Quick links</h5>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                {/* <li>
                  <Link to="/tracking">Tracking</Link>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h5>Services</h5>
              <ul>
                <li>
                  <Link to="/">Air Shipping</Link>
                </li>
                <li>
                  <Link to="/">Expert Staff</Link>
                </li>
                <li>
                  <Link to="/">Ground Shipping</Link>
                </li>
                <li>
                  <Link to="/">Logistic Services</Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h5>Contacts</h5>
              <ul className="address">
                <li>
                  <span className="icon_pin"></span> 530 Blackhawk Park Avenue
                  Rockford, IL 61104
                </li>
                <li>
                  <span className="icon_phone"></span> (331) 330-7043
                </li>
                <li>
                  <span className="icon_phone"></span> (510) 485-9219
                </li>
                {/* <li>
                  <span className="icon_mail"></span>
                  support@astrologixticssolutions.co
                </li> */}
                {/* make link mailto */}
                <li>
                  <span className="icon_mail"></span>
                  <a href="mailto:support@astrologixticssolutions.co">
                    support@astrologixticssolutions.co
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="footer__copyright__text">
                <p>
                  Copyright Astro Logistics &copy;
                  {year} All rights reserved
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              {/* <div className="footer__copyright__links">
                <Link to="/">Client Login</Link>
                <Link to="/">Join Team</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
