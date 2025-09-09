// src/pages/Login.js
import React, { useState } from "react";
import "./login.css"; // bạn copy CSS từ style.css vào file này

export default function Login() {
  const [isActive, setIsActive] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // sau khi xác thực thành công
    localStorage.setItem("isAuthenticated", "true");
    window.location.href = "/";
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Register thành công (chưa kết nối backend)");
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      {/* Register form */}
      <div className="form-container sign-up">
        <form onSubmit={handleRegister}>
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      {/* Login form */}
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
      </div>

      {/* Toggle panels */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button
              type="button"
              className="hidden"
              onClick={() => setIsActive(false)}
            >
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button
              type="button"
              className="hidden"
              onClick={() => setIsActive(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
