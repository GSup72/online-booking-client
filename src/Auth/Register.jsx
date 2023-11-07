import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

export const Register = (props) => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!name || !password || !email) {
      setError("Будь-ласка, заповніть усі поля");
    } else {
      try {
        setError("");
        const response = await axios.post("http://ec2-16-171-234-234.eu-north-1.compute.amazonaws.com/api/signup",
          {
            name,
            password,
            email,
          }
        );
        console.log(response.data)
        if (response.data.message === "REGISTERED") {
          // Викликайте функцію props.onFormSwitch, якщо потрібно переключити форму
          // або виконайте іншу логіку залежно від вашого використання
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
    <div className="box">
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form">
          <label htmlFor="name">Name</label>
          <input className="inlr" value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="name" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input className="inlr" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"/>
          <label htmlFor="password">Password</label>
          <input className="inlr" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
          {error && <p className="error-message">{error}</p>}
          <button className="logreg" type="submit" onClick={handleRegisterSubmit}> Sign up </button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch("login")}> Already have an account? Login here. </button>
      </div>
    </div>
  );
};
