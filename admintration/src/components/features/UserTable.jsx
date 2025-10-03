import React from "react";

const UserTable = ({ users, toggleRole }) => (
  <div className="space-y-3">
    <h3 className="text-lg font-semibold">Users</h3>
    <div className="bg-white/60 p-3 rounded-2xl border border-gray-100 shadow-sm">
      {users.map((u) => (
        <div
          key={u.id}
          className="flex items-center justify-between p-2 border-b last:border-b-0"
        >
          <div>
            <div className="font-medium">{u.name}</div>
            <div className="text-xs text-gray-500">{u.email}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-600">{u.role}</div>
            <button
              onClick={() => toggleRole(u.id)}
              className="px-3 py-1 rounded bg-gray-100"
            >
              Toggle Role
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UserTable;
