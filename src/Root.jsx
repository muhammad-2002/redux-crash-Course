import React, { useState } from "react";
import Counter from "./Counter";
import "./index.css";
import Stats from "./stats";
const initialCounter = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];
export default function Root() {
  const [counters, setCounters] = useState(initialCounter);

  const totalCounter = counters.reduce((sum, curr) => curr.value + sum, 0);

  const handleIncrement = (IncrementId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === IncrementId) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };
  const handleDecrement = (decrementId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === decrementId) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };
  return (
    <div className="w-screen h-screen bg-gray-100 p-10 text-slate-700">
      <h1 className="max-w-md mx-auto text-center font-bold text-2xl">
        Simple Calculator Application
      </h1>
      <div className="max-w-md mx-auto space-y-5 mt-10">
        {counters.map((count) => (
          <Counter
            key={count.id}
            count={count.value}
            onIncrement={() => handleIncrement(count.id)}
            onDecrement={() => handleDecrement(count.id)}
          ></Counter>
        ))}
        <Stats totalCount={totalCounter}></Stats>
      </div>
    </div>
  );
}
