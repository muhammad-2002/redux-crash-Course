import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { decrement, increment } from "./features/counters/counterSlice";

import "./index.css";
import Posts from "./Posts";
import Stats from "./stats";

export default function Root() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCounter = counters.reduce((sum, curr) => curr.value + sum, 0);

  const handleIncrement = (IncrementId) => {
    dispatch(increment(IncrementId));
  };
  const handleDecrement = (decrementId) => {
    dispatch(decrement(decrementId));
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
        <Posts></Posts>
      </div>
    </div>
  );
}
