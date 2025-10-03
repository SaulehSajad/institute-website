import React from "react";

const Card = ({ title, value, children }) => (
  <div className="p-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm text-gray-600">{title}</h4>
        <div className="text-2xl font-semibold text-black">{value}</div>
      </div>
      <div>{children}</div>
    </div>
  </div>
);

export default Card;
