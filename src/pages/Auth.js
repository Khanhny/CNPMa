import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Auth({ setIsAuthenticated }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignIn) {
      // 🔹 LOGIN
      if (formData.email && formData.password) {
        localStorage.setItem("isAuthenticated", "true");
        setIsAuthenticated(true);
        navigate("/dashboard");
      } else {
        alert("Vui lòng nhập email và mật khẩu!");
      }
    } else {
      // 🔹 REGISTER
      if (
        formData.username &&
        formData.phone &&
        formData.email &&
        formData.password &&
        formData.confirmPassword
      ) {
        if (formData.password !== formData.confirmPassword) {
          alert("Mật khẩu xác nhận không khớp!");
          return;
        }
        localStorage.setItem("isAuthenticated", "true");
        setIsAuthenticated(true);
        navigate("/dashboard");
      } else {
        alert("Vui lòng điền đầy đủ thông tin!");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg flex w-[950px] overflow-hidden"
      >
        {/* 🔹 Left Panel - Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username + Phone chỉ khi Sign Up */}
            {!isSignIn && (
              <>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
              </>
            )}

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password chỉ khi Sign Up */}
            {!isSignIn && (
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            )}

            {isSignIn && (
              <p className="text-sm text-gray-500 text-right cursor-pointer">
                Forgot Your Password?
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              {isSignIn ? "SIGN IN" : "SIGN UP"}
            </button>
          </form>
        </div>

        {/* 🔹 Right Panel - Switch */}
        <div className="w-1/2 bg-gradient-to-r from-blue-300 to-blue-500 text-white flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold mb-4">
            {isSignIn ? "Hello, Friend!" : "Welcome Back!"}
          </h2>
          <p className="mb-6 text-center">
            {isSignIn
              ? "Register with your personal details to use all site features"
              : "To keep connected with us please login with your info"}
          </p>
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            {isSignIn ? "SIGN UP" : "SIGN IN"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
