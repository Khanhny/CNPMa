import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Dashboard" },
    { path: "/interns", label: "Interns" },
    { path: "/recruitment", label: "Recruitment" },
    { path: "/training", label: "Training" },
    { path: "/interviews", label: "Interviews" },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col">
      <div className="px-6 py-4 text-2xl font-bold text-blue-600 border-b">
        Logo
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-2 rounded-lg transition ${
              location.pathname === item.path
                ? "bg-blue-500 text-white font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
