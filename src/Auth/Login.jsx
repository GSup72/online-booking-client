import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

export const Login = (props) => {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        if (!name || !password) {
          setError("Будь-ласка, заповніть усі поля");
        } else {
          try {
            setError("");
            const response = await axios.post("http://ec2-16-16-207-15.eu-north-1.compute.amazonaws.com/api/signin", 
            {
              name,
              password,
            }
          );
            if (response.data.message === "LOGGED IN") {
              // Викликайте функцію props.onFormSwitch, якщо потрібно переключити форму
            } else if (response.data.error) {
              setError(response.data.error);
            } 
          } catch (error) {
            console.log(error);
            setError("Виникла помилка");
          }
        }
    };

    return (
        <div className ="box">   
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="name">Name</label>
                <input className="inlr" value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="name" id="name" name="name" />
                <label htmlFor="password">Password</label>
                <input className="inlr" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                {error && <p className="error-message">{error}</p>}
                <button className="logreg" type="submit" onClick={handleLoginSubmit}>Sign in</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch("register")}>Don"t have an account? Register here.</button>
        </div>
        </div>
    )
}
