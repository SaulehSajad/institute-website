import React from "react";

const Topbar = ({ query, setQuery, onAdd }) => (
  <div className="flex items-center justify-between p-4 bg-transparent">
    <div className="flex items-center gap-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search students, books, users..."
        className="px-3 py-2 rounded-lg border border-gray-200 shadow-sm w-96 bg-white/60"
      />
    </div>
    <div className="flex items-center gap-3">
      <button
        onClick={onAdd}
        className="px-4 py-2 bg-black text-white rounded-lg"
      >
        + Add
      </button>
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        A
      </div>
    </div>
  </div>
);

export default Topbar;
