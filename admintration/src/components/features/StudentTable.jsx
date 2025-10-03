import React from "react";

const StudentTable = ({ students, onEdit, onDelete }) => (
  <div className="overflow-x-auto bg-white/60 rounded-2xl p-3 shadow-sm border border-gray-100">
    <table className="min-w-full text-left text-sm">
      <thead>
        <tr className="text-gray-600">
          <th className="p-3">ID</th>
          <th className="p-3">Name</th>
          <th className="p-3">Class</th>
          <th className="p-3">Email</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id} className="border-t border-gray-100">
            <td className="p-3">{s.id}</td>
            <td className="p-3 font-medium">{s.name}</td>
            <td className="p-3">{s.class}</td>
            <td className="p-3 text-gray-600">{s.email}</td>
            <td className="p-3 flex gap-2">
              <button
                onClick={() => onEdit(s)}
                className="px-3 py-1 rounded bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(s.id)}
                className="px-3 py-1 rounded bg-red-50 text-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default StudentTable;
