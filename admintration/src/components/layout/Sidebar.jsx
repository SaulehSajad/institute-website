import React from "react";
import Icon from "../common/Icon";
import { GRADIENTS } from "../../constants";

const Sidebar = ({ active, setActive }) => {
  const items = [
    { key: "dashboard", label: "Dashboard" },
    { key: "students", label: "Student Management" },
    { key: "exams", label: "Exam Results" },
    { key: "library", label: "Library" },
    { key: "users", label: "User Management" },
    { key: "settings", label: "Settings" },
  ];

  return (
    <aside
      className="w-72 p-4 h-screen sticky top-0"
      style={{ background: GRADIENTS.frosted }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center font-bold">
          EI
        </div>
        <div>
          <div className="text-lg font-semibold">EduAdmin</div>
          <div className="text-xs text-gray-500">Institute Panel</div>
        </div>
      </div>

      <nav className="space-y-1">
        {items.map((it) => (
          <button
            key={it.key}
            onClick={() => setActive(it.key)}
            className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors ${
              active === it.key ? "bg-white/90 shadow" : "hover:bg-white/50"
            }`}
          >
            <Icon>{it.label[0]}</Icon>
            <span className="font-medium text-gray-800">{it.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 text-xs text-gray-500">
        Theme presets available in component source.
      </div>
    </aside>
  );
};

export default Sidebar;
