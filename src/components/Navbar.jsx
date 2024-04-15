import React, { useState } from "react";
import "./Navbar.css";

const LoginModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          ×
        </button>
        <h2>Login</h2>
        <form>
          <div>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <button type="submit">Login</button>
            <h3>Forgot password?</h3>
          </div>
        </form>
      </div>
    </div>
  );
};

const ContactModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          ×
        </button>
        <div>
          <h1>Our Address</h1>
          <h6>
            Manav Mandir, Lavkush Aashram, <br />
            Vill - Karauli, Kanpur, U.P{" "}
          </h6>
          <h6>Pin Code - 208021</h6>
          <h6>
            <span />
            &nbsp; karaulisarkar@gmail.com
          </h6>
          <h6>
            <span />
            &nbsp; +91 9839861919
          </h6>
        </div>
        <div className="mapouter">
          <img src="map.png" alt="map" />
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  const handleContactClick = () => {
    setContactOpen(true);
  };

  const handleContactClose = () => {
    setContactOpen(false);
  };

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleLoginClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#store">Store</a>
          <a href="#instructions">Instructions</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="navbar-right">
          <a href="#contact" onClick={handleContactClick}>
            Contact Us
          </a>
          <a href="#register">Register</a>
          <a className="login" href="#login" onClick={handleLoginClick}>
            Login
          </a>
        </div>
      </div>
      {isModalOpen && <LoginModal onClose={handleLoginClose} />}
      {isContactOpen && <ContactModal onClose={handleContactClose} />}
    </>
  );
};

export default Navbar;
