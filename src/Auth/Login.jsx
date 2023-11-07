import React, { useState } from "react";
import axios from 'axios';
import "./Auth.css";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('signup');
  
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const [showPasswordWarning, setShowPasswordWarning] = useState(false);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
          setError('Please fill out both username and password.');
        } else {
          try {
            setError(''); // Clear any previous error message
            const response = await axios.post('http://ec2-13-53-125-66.eu-north-1.compute.amazonaws.com/api/signin', {
              username,
              password,
            });
            if (response.data.message === 'LOGGED IN') {
              // Викликайте функцію props.onFormSwitch, якщо потрібно переключити форму
              // або виконайте іншу логіку залежно від вашого використання
            } else if (response.data.error) {
              setError(response.data.error);
            } 
          } catch (error) {
            console.log(error);
            setError(error);
          }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setShowPasswordWarning(true);
            return;
        }
        setShowPasswordWarning(false);
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
                <input className="inlr" value={password} onChange={(e) => handlePasswordChange(e)} type="password" placeholder="********" id="password" name="password" />
                {showPasswordWarning && <p className="password-warning">Password should be at least 6 characters long.</p>}
                <button className="logreg" type="submit" onClick={handleLoginSubmit}>Sign in</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>
    )
}