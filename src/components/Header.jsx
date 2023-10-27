import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo/logo.png";
import Sidebar from "./sidebar/Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <div id="preloder">
        <div className="loader"></div>
      </div> */}

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__search__option">
          <span className="icon_search search-switch"></span>
        </div>
        <div className="offcanvas__logo">
          <Link to="/">
            <img src="img/footer-logo.png" style={{ width: "10rem" }} alt="" />
          </Link>
        </div>
        <div id="mobile-menu-wrap"></div>
        <ul className="offcanvas__widget">
          <li>
            <span className="icon_phone"></span> (331) 330-7043
          </li>
          <li>
            <span className="icon_pin"></span> 530 Blackhawk Park Avenue
            Rockford, IL 61104
          </li>
        </ul>
        <div className="offcanvas__social">
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

      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 offset-lg-3">
                <ul className="header__top__widget">
                  <li>
                    <span className="icon_phone"></span> (331) 330-7043
                  </li>
                  <li>
                    <span className="icon_pin"></span> 530 Blackhawk Park Avenue
                    Rockford, IL 61104
                  </li>
                </ul>
                <div className="header__top__right">
                  <div className="header__top__right__social">
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
            </div>
          </div>
        </div>
        <div className="header__options">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                  <Link to="/">
                    <img src={logo} style={{ width: "10rem" }} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <nav className="header__menu mobile-menu">
                  <ul>
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contacts</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <div className="col-lg-2">
                <div className="search__option">
                  <span className="icon_search search-switch"></span>
                </div>
              </div> */}
            </div>
          </div>
          <div
            className="canvas__open"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
