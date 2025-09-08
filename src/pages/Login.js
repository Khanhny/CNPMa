import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Sau này bạn thay bằng gọi API backend để check tài khoản
    localStorage.setItem("isAuthenticated", "true");
    window.location.href = "/";
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Sau này thay bằng gọi API backend để lưu user mới
    alert("Account created successfully! You can now login.");
    setIsSignUp(false);
  };

  return (
    <div className={`container ${isSignUp ? "active" : ""}`} id="container">
      {/* Sign Up */}
      <div className="form-container sign-up">
        <form onSubmit={handleRegister}>
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      {/* Sign In */}
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <span>or use your account</span>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" onClick={() => setIsSignUp(false)}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" onClick={() => setIsSignUp(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
