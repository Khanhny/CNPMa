import React from "react";
import DashboardCard from "../components/DashboardCard";

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Total Interns" value="120" />
        <DashboardCard title="Active Mentors" value="15" />
        <DashboardCard title="Ongoing Programs" value="8" />
      </div>
    </div>
  );
}
