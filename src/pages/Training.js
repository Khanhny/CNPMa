import React, { useState } from "react";

export default function Training() {
  const [sessions] = useState([
    { id: 1, topic: "React Basics", mentor: "Anh Dũng", date: "10/09/2025", status: "Sắp diễn ra" },
    { id: 2, topic: "Soft Skills", mentor: "Chị Hoa", date: "12/09/2025", status: "Hoàn thành" },
    { id: 3, topic: "Database Intro", mentor: "Thầy Nam", date: "15/09/2025", status: "Chưa bắt đầu" },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4">📚 Training Sessions</h2>
      <table className="w-full border-collapse border rounded-lg">
        <thead className="bg-green-100">
          <tr>
            <th className="border px-4 py-2 text-left">Chủ đề</th>
            <th className="border px-4 py-2 text-left">Mentor</th>
            <th className="border px-4 py-2 text-left">Ngày</th>
            <th className="border px-4 py-2 text-left">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((s) => (
            <tr key={s.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{s.topic}</td>
              <td className="border px-4 py-2">{s.mentor}</td>
              <td className="border px-4 py-2">{s.date}</td>
              <td className="border px-4 py-2">{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
