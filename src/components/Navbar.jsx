import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

const LoginModal = ({ onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <div className="blur-circle-one" />
        <div className="blur-circle-two" />
        <div className="login-title">
          <h2>Login</h2>
          <hr />
        </div>
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
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <div>
          <div className="login-title">
            <h1>Our Address</h1>
            <hr />
          </div>
          <h6>
            Manav Mandir, Lavkush Aashram, <br />
            Vill - Karauli, Kanpur, U.P{" "}
          </h6>
          <h6>Pin Code - 208021</h6>
          <div className="contact-options">
            <h6>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                </svg>
              </span>
              &nbsp; karaulisarkar@gmail.com
            </h6>
            <h6>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                </svg>
              </span>
              &nbsp; +91 9839861919
            </h6>
          </div>
        </div>
        <div className="mapouter">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.6986253925575!2d80.3635360803896!3d26.336256617679823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4398ee73a143%3A0x7ca11c8b1da12b66!2sKarauli%20Shankar%20Mahadev!5e0!3m2!1sen!2sin!4v1713356469536!5m2!1sen!2sin"
            width="600"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const FaqModal = ({ onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="faq-modal">
      <div className="faq-modal-content" ref={modalRef}></div>
    </div>
  );
};

const Navbar = ({ isDark }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const [isFaqOpen, setFaqOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(isDark);
  const location = useLocation();

  const handleFaqClick = () => {
    setFaqOpen(true);
  };

  const handleFaqClose = () => {
    setFaqOpen(false);
  };

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
          <a
            className="active"
            href="#home"
            style={{
              color: isDark ? "black" : "white",
            }}
          >
            Home
          </a>
          <a
            href="#store"
            style={{
              color: isDark ? "black" : "white",
            }}
          >
            Store
          </a>
          <a
            href="#instructions"
            style={{
              color: isDark ? "black" : "white",
            }}
          >
            Instructions
          </a>
          <a
            href="#faq"
            onClick={handleFaqClick}
            style={{
              color: isDark ? "black" : "white",
            }}
          >
            FAQ
          </a>
        </div>
        <div className="navbar-right">
          <a
            href="#contact"
            onClick={handleContactClick}
            style={{
              color: isDark ? "black" : "white",
            }}
          >
            Contact Us
          </a>
          <a
            href="#register"
            style={{
              color: isDark ? "black" : "white",
            }}
          >
            Register
          </a>
          <a className="login" href="#login" onClick={handleLoginClick}>
            Login
          </a>
        </div>
      </div>
      {isModalOpen && <LoginModal onClose={handleLoginClose} />}
      {isContactOpen && <ContactModal onClose={handleContactClose} />}
      {isFaqOpen && <FaqModal onClose={handleFaqClose} />}
    </>
  );
};

export default Navbar;
