import React, { useState } from "react";

export default function Dashboard() {
  const [role, setRole] = useState("HR"); // mặc định HR, có thể đổi

  const renderDashboard = () => {
    switch (role) {
      case "HR":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-600">HR Dashboard</h2>
            <div className="grid grid-cols-3 gap-4">
              <Card title="Tổng số Interns" value="25" />
              <Card title="Ứng viên mới" value="12" />
              <Card title="Lịch phỏng vấn" value="5" />
            </div>
          </div>
        );
      case "Mentor":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-green-600">Mentor Dashboard</h2>
            <div className="grid grid-cols-3 gap-4">
              <Card title="Interns đang hướng dẫn" value="8" />
              <Card title="Bài tập giao" value="15" />
              <Card title="Feedback đã gửi" value="23" />
            </div>
          </div>
        );
      case "Intern":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-600">Intern Dashboard</h2>
            <div className="grid grid-cols-3 gap-4">
              <Card title="Nhiệm vụ tuần này" value="5" />
              <Card title="Buổi training" value="3" />
              <Card title="Điểm đánh giá" value="85/100" />
            </div>
          </div>
        );
      case "Coordinator":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">Coordinator Dashboard</h2>
            <div className="grid grid-cols-3 gap-4">
              <Card title="Lịch training" value="6" />
              <Card title="Mentor đang hoạt động" value="4" />
              <Card title="Sự kiện sắp tới" value="2" />
            </div>
          </div>
        );
      case "Admin":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-red-600">Admin Dashboard</h2>
            <div className="grid grid-cols-3 gap-4">
              <Card title="Tổng user hệ thống" value="120" />
              <Card title="HR Accounts" value="5" />
              <Card title="Mentor Accounts" value="12" />
            </div>
          </div>
        );
      default:
        return <p className="text-gray-600">Chọn role để xem dashboard.</p>;
    }
  };

  return (
    <div className="p-6">
      {/* Dropdown chọn role */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="HR">HR</option>
          <option value="Mentor">Mentor</option>
          <option value="Intern">Intern</option>
          <option value="Coordinator">Coordinator</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      {/* Nội dung dashboard theo role */}
      {renderDashboard()}
    </div>
  );
}

// Component Card
function Card({ title, value }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 hover:shadow-md transition">
      <p className="text-gray-500">{title}</p>
      <h3 className="text-xl font-bold text-blue-700 mt-2">{value}</h3>
    </div>
  );
}
