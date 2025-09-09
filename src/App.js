import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Interns from "./pages/Interns";
import Recruitment from "./pages/Recruitment";
import Training from "./pages/Training";
import Interviews from "./pages/Interviews";
import Auth from "./pages/Auth";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") setIsAuthenticated(true);
  }, []);

  return (
    <Router>
      {isAuthenticated ? (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            <Header setIsAuthenticated={setIsAuthenticated} />
            <main className="p-6 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/interns" element={<Interns />} />
                <Route path="/recruitment" element={<Recruitment />} />
                <Route path="/training" element={<Training />} />
                <Route path="/interviews" element={<Interviews />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            </main>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/auth" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      )}
    </Router>
  );
}
