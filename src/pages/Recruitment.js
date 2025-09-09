import React, { useState } from "react";

export default function Recruitment() {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Nguyễn Văn Lộc", email: "nguyenloc132@gmail.com", status: "Đang xét duyệt" },
    { id: 2, name: "Trần Thị Bích Phương", email: "bichphuongg011@gmail.com", status: "Phỏng vấn" },
    { id: 3, name: "Lê Văn An", email: "antrann66@gmail.com", status: "Đậu" },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">📋 Recruitment</h2>
      <table className="w-full border-collapse border rounded-lg">
        <thead className="bg-blue-100">
          <tr>
            <th className="border px-4 py-2 text-left">Tên ứng viên</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c) => (
            <tr key={c.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{c.name}</td>
              <td className="border px-4 py-2">{c.email}</td>
              <td className="border px-4 py-2">{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
