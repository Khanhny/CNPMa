import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Tạm hardcode username/password
    if (username === "admin" && password === "123") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Login
        </h2>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-2 rounded-lg"
            placeholder="Enter username"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded-lg"
            placeholder="Enter password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
