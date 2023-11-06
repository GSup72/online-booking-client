import React, { useState } from "react";
import "./Auth.css";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className ="box">
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input className="inlr" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input className="inlr" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="logreg" type="submit">Sign in</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>
    )
}