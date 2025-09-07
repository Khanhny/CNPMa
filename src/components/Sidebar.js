import React from "react";
import { Link } from "react-router-dom";
import { Home, Users, Briefcase, BookOpen, Calendar } from "lucide-react";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Interns", path: "/interns", icon: <Users size={20} /> },
    { name: "Recruitment", path: "/recruitment", icon: <Briefcase size={20} /> },
    { name: "Training", path: "/training", icon: <BookOpen size={20} /> },
    { name: "Interviews", path: "/interviews", icon: <Calendar size={20} /> },
  ];

  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold text-green-600 mb-6">IMS</h2>
      <ul className="space-y-3">
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 transition"
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
