import React from "react";
import Counter from "./Counter";
import "./index.css";
export default function Root() {
  return (
    <div className="w-screen h-screen bg-gray-100 p-10 text-slate-700">
      <h1 className="max-w-md mx-auto text-center font-bold text-2xl">
        Simple Calculator Application
      </h1>
      <div className="max-w-md mx-auto space-y-5 mt-10">
        <Counter></Counter>
      </div>
    </div>
  );
}
