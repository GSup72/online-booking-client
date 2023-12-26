import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "./link.css";
import Modal from "../Modal/Modal";


export const Link1 = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalActive1, setModalActive1] = useState(false);
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
            <Link to="/profile"><button className="button0">Профіль</button></Link>
            </div>
        </header>

    <div class="gallery-container">
    <div class="main-image">
      <img src="https://a0.muscache.com/im/pictures/147d730e-3d4e-4d63-bd43-02ad14354812.jpg?im_w=1200" alt="Головне зображення"/>
    </div>
    <div class="small-images">
      <img src="https://a0.muscache.com/im/pictures/00869531-3007-4ba5-ae26-2d6c1bbfa7dd.jpg?im_w=720" alt="Маленьке зображення 1"/>
      <img src="https://a0.muscache.com/im/pictures/0de6c6a8-f4b0-4940-bfbe-24ed045d75aa.jpg?im_w=720" alt="Маленьке зображення 2"/>
      <img src="https://a0.muscache.com/im/pictures/936e521f-8a9a-4a36-8f40-64b221b04f1a.jpg?im_w=720" alt="Маленьке зображення 3"/>
      <img src="https://a0.muscache.com/im/pictures/4a83360e-9f62-45ca-b084-5d59f6d1e47c.jpg?im_w=1200" alt="Маленьке зображення 4"/>
    </div>
  </div>


  <div class="apartments">
    <div class="left-section">
      <h2>Помешкання для оренди цілком</h2>
      <p>Місто Brno</p>
      <div class="squares">
      <div class="square">
        <img src={require('../icon/icon1.png')} alt="Іконка 1"/>
        <p>3 Спальні</p>
      </div>
      <div class="square">
      <img src={require('../icon/icon2.png')} alt="Іконка 2"/>
        <p>2 Ванні комнати</p>
      </div>
      <div class="square">
      <img src={require('../icon/icon3.png')} alt="Іконка 3"/>
        <p>2 Парковочних місця</p>
      </div>
      <div class="square">
      <img src={require('../icon/icon4.png')} alt="Іконка 4"/>
        <p>1 Домашню тварину дозволено</p>
        </div>
      </div>
      <h2>Описання квартири</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ipsa beatae cumque est. Quis enim nisi repudiandae debitis, optio quaerat quae vel, esse modi in impedit quod deserunt necessitatibus eligendi!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ipsa beatae cumque est. Quis enim nisi repudiandae debitis, optio quaerat quae vel, esse modi in impedit quod deserunt necessitatibus eligendi!</p>
    </div>
    <div class="right-section">
    <div className="anketa"> 
      <h2>$ 1000 - $ 3000</h2>
      <p>Коротки період: $ 1000</p>
      <p>Середній період: $ 2000</p>
      <p>Довгий період: $ 3000</p>
      <button onClick={() => setModalActive1(true)}><b>Резервувати</b></button>
      <Modal active={modalActive1} setActive={setModalActive1}>

      </Modal>
      <p>Контакти</p>
    </div>
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

