import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Interns from "./pages/Interns";
import Recruitment from "./pages/Recruitment";
import Training from "./pages/Training";
import Interviews from "./pages/Interviews";
import Login from "./pages/Login";

export default function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Router>
      {isAuthenticated ? (
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="p-6 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/interns" element={<Interns />} />
                <Route path="/recruitment" element={<Recruitment />} />
                <Route path="/training" element={<Training />} />
                <Route path="/interviews" element={<Interviews />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}
