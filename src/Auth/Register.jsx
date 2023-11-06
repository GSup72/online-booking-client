import React, { useState } from "react";
import "./Auth.css";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className ="box">
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input className="inlr" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Name" />
            <label htmlFor="email">Email</label>
            <input className="inlr" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input className="inlr" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="logreg" type="submit">Sign up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    </div>
    )
}