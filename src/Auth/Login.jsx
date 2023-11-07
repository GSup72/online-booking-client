import React, { useState } from "react";
import axios from 'axios';
import "./Auth.css";

export const Login = (props) => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
          setError('Please fill out both name and password.');
        } else {
          try {
            setError(''); // Очистити попереднє повідомлення про помилку
            const response = await axios.post('http://ec2-16-171-234-234.eu-north-1.compute.amazonaws.com/api/signin', {
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
            setError('An error occurred.'); // Встановіть власне повідомлення про помилку
          }
        }
    };

    return (
        <div className ="box">   
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="username">Username</label>
                <input className="inlr" value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input className="inlr" value={password} onChange={(e) => handlePasswordChange(e)} type="password" placeholder="********" id="password" name="password" />
                
                {error && <p className="error-message">{error}</p>}
                <button className="logreg" type="submit" onClick={handleLoginSubmit}>Sign in</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>
    )
}
