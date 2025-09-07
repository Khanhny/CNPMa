import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true); // true = Login, false = Register
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false); // hiện/ẩn password
  const [error, setError] = useState("");
  const [savedUsers, setSavedUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setSavedUsers(users);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUsernameSelect = (e) => {
    const selectedUsername = e.target.value;
    setForm({ ...form, username: selectedUsername });
    const user = savedUsers.find((u) => u.username === selectedUsername);
    if (user) {
      setForm((prev) => ({ ...prev, password: user.password }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      const user = savedUsers.find(
        (u) =>
          u.username === form.username && u.password === form.password
      );
      if (user) {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/");
      } else {
        setError("Sai tên đăng nhập hoặc mật khẩu!");
      }
    } else {
      if (form.password !== form.confirmPassword) {
        setError("Mật khẩu và xác nhận mật khẩu không khớp!");
        return;
      }
      if (savedUsers.find((u) => u.username === form.username)) {
        setError("Tên đăng nhập đã tồn tại!");
        return;
      }

      const newUser = {
        username: form.username,
        password: form.password,
        email: form.email,
        phone: form.phone,
        address: form.address,
      };

      const updatedUsers = [...savedUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          {isLogin ? "Đăng nhập" : "Đăng ký"}
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          {isLogin ? (
            <>
              <input
                list="usernames"
                type="text"
                name="username"
                placeholder="Tên đăng nhập"
                value={form.username}
                onChange={handleUsernameSelect}
                required
                className="w-full p-2 border rounded-lg"
              />
              <datalist id="usernames">
                {savedUsers.map((u) => (
                  <option key={u.username} value={u.username} />
                ))}
              </datalist>
            </>
          ) : (
            <input
              type="text"
              name="username"
              placeholder="Tên đăng nhập"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          )}

          {/* Register thêm các field */}
          {!isLogin && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Số điện thoại"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                name="address"
                placeholder="Địa chỉ"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg"
              />
            </>
          )}

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Mật khẩu"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-sm text-gray-500"
            >
              {showPassword ? "Ẩn" : "Hiện"}
            </button>
          </div>

          {/* Confirm password chỉ Register */}
          {!isLogin && (
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Xác nhận mật khẩu"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-sm text-gray-500"
              >
                {showPassword ? "Ẩn" : "Hiện"}
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-600 font-medium"
          >
            {isLogin ? "Đăng ký" : "Đăng nhập"}
          </button>
        </p>
      </div>
    </div>
  );
}
