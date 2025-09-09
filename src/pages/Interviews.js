import React from "react";

export default function Interviews() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Lịch phỏng vấn
      </h2>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-3 border">Ứng viên</th>
              <th className="p-3 border">Vị trí</th>
              <th className="p-3 border">Ngày phỏng vấn</th>
              <th className="p-3 border">Giờ</th>
              <th className="p-3 border">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Quảng Linh Linh</td>
              <td className="p-3 border">Management System</td>
              <td className="p-3 border">10/09/2025</td>
              <td className="p-3 border">09:00</td>
              <td className="p-3 border">
                <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-600">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Trần Mỹ Linh</td>
              <td className="p-3 border">Backend Intern</td>
              <td className="p-3 border">11/09/2025</td>
              <td className="p-3 border">14:00</td>
              <td className="p-3 border">
                <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-600">
                  Passed
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Trần Quách Ngọc Thảo</td>
              <td className="p-3 border">Designer Intern</td>
              <td className="p-3 border">12/09/2025</td>
              <td className="p-3 border">10:30</td>
              <td className="p-3 border">
                <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-600">
                  Failed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
