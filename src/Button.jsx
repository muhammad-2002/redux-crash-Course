import React from "react";

export default function Button({ children, type, handler }) {
  const style =
    type === "danger"
      ? "bg-red-500 text-white shadow px-3 py-2 rounded"
      : "bg-blue-500 text-white shadow px-3 py-2 rounded";
  return (
    <button className={style} onClick={handler}>
      {children}
    </button>
  );
}
