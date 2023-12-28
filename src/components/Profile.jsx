import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "./link.css";
import "./Profile.css"
import Modal from "../Modal/Modal";

export const Profile = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div>
        <header className="header">
            <span className="header_logo">LOGO</span>
            <nav className="header_nav">
                <ul className="header_nav_list">
                    <a href="/" className="header_nav_item">Find a Property</a>
                    <a href="/" className="header_nav_item">Share Stories</a>
                    <a href="/" className="header_nav_item">Rental Guides</a>
                    <a href="/" className="header_nav_item">Main</a>
                    <a href="/" className="header_nav_item">Download Mobile App</a>
                </ul>
            </nav>
            <div className="header_button">
            <Link to="/"><button className="button0">Профіль</button></Link>
            </div>
        </header>


    <div className="profile">
    <div className="profile-container">
    <div className="avatar-container">
      <img src={require('../icon/Profile.png')} alt="профіль"/>
      <p><b>Upload a Photo</b></p>
    </div>
    <div className="settings">
    <h2>Identity Verification</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit maxime similique</p>
    </div>
    <div className="settings1">
    <h2>Sasha K</h2>
    <p>✔ Email Confirmed</p>
    <p>✔ Mobile Confirmed</p>
    </div>
  </div>
  <div className="profile-info">
        <h2>Hello, Sasha K</h2>
        <p>Joined in 2023</p>
        <button><b>Exit</b></button>
        <br /><b>★ Reviews</b>
        <hr />
        <p>Reviewed By You</p>
  </div>
  </div>
        

        <footer class="footer">
    <div class="footer-item">
      <h2 className="log">LOGO</h2>
      <p>Lorem ipsum dolor sit amet, consectetur <br /> 
      adipiscing elit, sed do eiusmod tempor incididunt <br /> 
      ut labore et dolore magna aliqua.  </p>
    </div>
    <div class="footer-item">
      <h2>COMPANY</h2>
      <ul>
        <li>About Us</li>
        <li>Legal Information</li>
        <li>Contact Us</li>
        <li>Blogs</li>
      </ul>
    </div>
    <div class="footer-item">
      <h2>Help Center</h2>
      <ul>
        <li>Find a Property</li>
        <li>How to Host</li>
        <li>Why Us?</li>
        <li>FAQs</li>
        <li>Rental Guides</li>
      </ul>
    </div>
    <div class="footer-item">
      <h2>Contact Info</h2>
      <ul>
        <li>Phone: +1234567890</li>
        <li>Email: company@gmail.com</li>
        <li>Location: Tokio, Uzhorod</li>
        <li>
            
            <button className="buttona" onClick={() => setModalActive(true)}>Maps</button>
            <Modal active={modalActive} setActive={setModalActive}>
            <iframe name = "myframe" title="Google Maps" width = "470px" height = "450px" src = "https://www.google.com/maps/embed/v1/place?q=Tokyo+Shopping+Center,+Uzhgorod&key=YOUR_API_KEY&center=Uzhgorod"></iframe>
            </Modal>
        </li>
      </ul>
    </div>
  </footer>

        </div>
    );
};
