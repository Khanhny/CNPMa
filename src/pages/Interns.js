import React, { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";

export default function Interns() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-600">Quản lý Interns</h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          <Plus size={18} /> Thêm Intern
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm intern..."
          className="w-full border rounded-lg px-4 py-2 pl-10 focus:ring-2 focus:ring-blue-400"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-3 border">Tên</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Số điện thoại</th>
              <th className="p-3 border">Trạng thái</th>
              <th className="p-3 border text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Trần Văn Khánh</td>
              <td className="p-3 border">khanhtran24@example.com</td>
              <td className="p-3 border">0798265091</td>
              <td className="p-3 border">
                <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-600">
                  Active
                </span>
              </td>
              <td className="p-3 border text-center">
                <button className="text-blue-500 hover:text-blue-700 mr-2">
                  <Edit size={18} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Trần Ngọc Bích</td>
              <td className="p-3 border">bichtnsayhi@example.com</td>
              <td className="p-3 border">0908316741</td>
              <td className="p-3 border">
                <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-600">
                  On Training
                </span>
              </td>
              <td className="p-3 border text-center">
                <button className="text-blue-500 hover:text-blue-700 mr-2">
                  <Edit size={18} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Phan Hồng Phong</td>
              <td className="p-3 border">phongphan07@example.com</td>
              <td className="p-3 border">0791519460</td>
              <td className="p-3 border">
                <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-600">
                  Active
                </span>
              </td>
              <td className="p-3 border text-center">
                <button className="text-blue-500 hover:text-blue-700 mr-2">
                  <Edit size={18} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal thêm intern (UI thôi) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[400px] shadow">
            <h3 className="text-lg font-bold mb-4">Thêm Intern</h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Tên"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full border px-3 py-2 rounded"
              />
              <select className="w-full border px-3 py-2 rounded">
                <option>Active</option>
                <option>On Training</option>
                <option>Inactive</option>
              </select>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
