import React from "react";

export default function Interns() {
  const interns = [
    { id: 1, name: "Tran Nguyen Tuan Anh", major: "Computer Science", status: "Active" },
    { id: 2, name: "Vo Ngoc Tran", major: "Business", status: "Completed" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Interns</h2>
      <table className="w-full bg-white shadow rounded-lg">
        <thead className="bg-green-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Major</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {interns.map((intern) => (
            <tr key={intern.id} className="border-b">
              <td className="p-3">{intern.name}</td>
              <td className="p-3">{intern.major}</td>
              <td className="p-3">{intern.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
