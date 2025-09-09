import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/auth");
  };

  return (
    <header className="flex justify-between items-center bg-white shadow p-4">
      <h1 className="text-xl font-bold">Hệ thống Quản lý Thực tập</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Đăng xuất
      </button>
    </header>
  );
}
