import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Interns from "./pages/Interns";
import Recruitment from "./pages/Recruitment";
import Training from "./pages/Training";
import Interviews from "./pages/Interviews";
import Auth from "./pages/Auth";

// 🔹 Component PrivateRoute
function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/auth" />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Auth page (Login / Register) */}
        <Route path="/auth" element={<Auth />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                  <Header />
                  <main className="p-6 overflow-y-auto">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/interns" element={<Interns />} />
                      <Route path="/recruitment" element={<Recruitment />} />
                      <Route path="/training" element={<Training />} />
                      <Route path="/interviews" element={<Interviews />} />
                    </Routes>
                  </main>
                </div>
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
