import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Register } from './Auth/Register';
import { Login } from './Auth/Login';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Header />}
          />
          <Route
            path="/auth"
            element={currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;