import React, { useState } from "react";
import "./Header.css";
import Modal from "../Modal/Modal";

export const Header = () => {
    const [modalActive, setModalActive] = useState(false);
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
                <button className="button0" onClick={() => setModalActive(true)}>Modal</button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
            <h2>12312312312312321</h2>
            <h2>12312312312312321</h2>
            <h2>12312312312312321</h2>
            <h2>12312312312312321</h2>
            </Modal>
        </header>
    );
};
