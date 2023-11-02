import React, { useState } from "react";
import "./Header.css";
import Modal from "../Modal/Modal";

export const Header = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalActive1, setModalActive1] = useState(false);
    return (
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
                <button className="button0" onClick={() => setModalActive(true)}>Sign up</button>
                <button className="button2" onClick={() => setModalActive1(true)}>Sing in</button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                    <h2>Registration</h2>
                    <form id="registration-form">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className="center"><button type="submit" className="button1">Sign up</button></div>
                    </form>
            </Modal>
            <Modal active={modalActive1} setActive={setModalActive1}>
            <h2>Login</h2>
                    <form id="registration-form">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className="center"><button type="submit" className="button3">Sign in</button></div>
                    </form>
            </Modal>
        </header>
    );
};
