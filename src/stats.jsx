import React from "react";

export default function Stats({ totalCount }) {
  return (
    <div className="p-5 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">Total Count :{totalCount}</div>
    </div>
  );
}
