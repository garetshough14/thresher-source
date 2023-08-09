import React, { useEffect, useState } from "react";
import "../CSS/navbar.css";
import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsJustify } from "react-icons/bs";


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setShowMenu(window.innerWidth <= 465);
    };

    window.addEventListener("resize", handleWindowResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="top-nav">
        <div className="logo-container">
          <img className="main-logo" src='/logo.png' alt="Thresher Construction Logo" />
        </div>
        <div className="contact-wrapper">
          <div className="phone-container">
            <BsTelephoneForward style={{ fontSize: "30px" }} />
          </div>
          <div className="contact-container">
            <a className="phone-number" href="">
              (661) 885-9647
            </a>
            <p className="contact-description">Call us for free consultation</p>
          </div>
          <Link to='/contact' className="free-quotes-button">
            FREE QUOTES <AiOutlineArrowRight style={{ fontSize: "20px" }} />
          </Link>
        </div>
        {showMenu ? (
          <div className="hamburger-menu" onClick={() => setShowMenu(false)}>
            <BsJustify style={{ fontSize: "30px" }} />
          </div>
        ) : <button className="menu-close-button" onClick={() => setShowMenu(true)} />}
      </div>
      {!showMenu && (
        <div className="bottom-nav">
          <ul className="bottom-nav-items" onClick={() => setShowMenu(true)}>
            <li className="single-nav-item">
              <Link to="/">HOME</Link>
            </li>
            <li className="single-nav-item">
              <Link to="/services">OUR SERVICES</Link>
            </li>
            <li className="single-nav-item">
              <Link to="/gallery">GALLERY</Link>
            </li>
            <li className="single-nav-item">
              <Link to="/about">ABOUT US</Link>
            </li>
            <li className="single-nav-item">
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;