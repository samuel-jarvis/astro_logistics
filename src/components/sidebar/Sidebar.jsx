import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className="sidebar"
      style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
    >
      <ul className="sideNav__list" onClick={() => setIsOpen(false)}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
