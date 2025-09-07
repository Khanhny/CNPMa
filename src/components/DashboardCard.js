import React from "react";

export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-green-600">{value}</p>
    </div>
  );
}
