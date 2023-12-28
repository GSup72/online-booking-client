import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Modal from "../Modal/Modal";

export const Header = () => {
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
            <Link to="/profile"><button className="button0">Профіль</button></Link>
            </div>
        </header>

        <div className="gradient-box">
        <div className="search-box">
        <div className="find-text">Find</div>
        <input type="search-in" placeholder="Search" />
        </div>
        </div>
        <div class="line-container">
        <h1>Latest on the <br />Property list</h1>
        <hr />
        </div>
        <div className="card-container">
    
        <Link to="/Link1" className="card">
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-775973047500698039/original/2375332e-a700-4c07-8375-a4fa6bede752.jpeg?im_w=720" alt="house 1"/>
        <h2>Квартира у місті Brno</h2>
        <p>Красива кравтира в місті <br />3 ліжка</p>
        <span>$55</span>
        </Link>

        <Link to="/Link1" className="card">
        <img src="https://a0.muscache.com/im/pictures/f5a501f5-b772-4711-bc59-392b1cb9b809.jpg?im_w=720" alt="house 2"/>
        <h2>Квартира у місті Uzhorod</h2>
        <p>Нова чиста Квартира <br />5хв від центру</p>
        <span>$30</span>
        </Link>

        <Link to="/Link1" className="card">
        <img src="https://a0.muscache.com/im/pictures/18e18cc5-6eea-4a5f-a881-98a92d22e8ef.jpg?im_w=720" alt="house 3"/>
        <h2>Квартира у місті Bern</h2>
        <p>Затишнай й удобна квартира</p>
        <span>$65</span>
        </Link>

        <Link to="/Link1" className="card">
        <img src="https://a0.muscache.com/im/pictures/d73f65f7-f091-4029-8054-41fde587668a.jpg?im_w=720" alt="house 4"/>
        <h2>Квартира у місті Verona</h2>
        <p>Квартира недалеко від моря</p>
        <span>$75</span>
        </Link>
    </div>
 
    <div className="rectangle-container">
      <div className="content">
        <h2>Download Our <br />Mobile App</h2>
        <p>Available for free on these platfroms</p>
        <button>Download</button>
      </div>
      <div className="image-container">
        <img
          src="https://y3h2v2a5.rocketcdn.me/wp-content/uploads/2023/09/apple-iphone-15-pro-128gb-white-titanium-mtuw3.png" 
          alt="Фото"
        />
      </div>
    </div>

    <div class="line-container">
        <h1>Nearby Listed<br />Properties</h1>
        <hr />
        </div>
        <div className="card-container">
    
        <Link to="/Link1" className="card">
        <img src="https://a0.muscache.com/im/pictures/588955b6-7589-415b-9a88-8d2459ec02fe.jpg?im_w=720" alt="house 5"/>
        <h2>Квартира у місті Caen</h2>
        <p>Супер квартира для відпочинку</p>
        <span>$65</span>
        </Link>

        <Link to="/Link1" className="card">
        <img src="https://a0.muscache.com/im/pictures/d73f65f7-f091-4029-8054-41fde587668a.jpg?im_w=720" alt="house 6"/>
        <h2>Квартира у місті Le Mans</h2>
        <p>Кварти для сімї <br /> затишна й практична</p>
        <span>$90</span>
        </Link>

        <Link to="/Link1" className="card">
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-43782180/original/f4c6298e-4925-4a8f-bbdc-b67dbe82072c.jpeg?im_w=720" alt="house 7"/>
        <h2>Квартира у місті Cambridge</h2>
        <p>Простора й світла <br /> Також є відкрита тераса</p>
        <span>$50</span>
        </Link>

        <Link to="/Link1" className="card">
        <img src="https://a0.muscache.com/im/pictures/f5a501f5-b772-4711-bc59-392b1cb9b809.jpg?im_w=720" alt="house 8"/>
        <h2>Квартира у місті Tralee</h2>
        <p>Невеличка але затишна квартира рядом з містом</p>
        <span>$45</span>
        </Link>
    </div>

    <div class="content2">
    <div class="right-side">
    <div class="line-container">
        <h1>Nearby Listed<br />Properties</h1>
        <hr />
        </div>
      <div class="block2">
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        <p><b> Ask A Question</b>ㅤㅤㅤ<b>Find A Property</b></p>
        <button>Discover More</button>
      </div>
    </div>
    <div class="left-side">
      <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg" alt="Фото"/>
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
