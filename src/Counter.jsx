import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center shadow bg-white rounded-md space-y-3">
      <Count count={count} />
      <div className="space-x-3 flex">
        <Button handler={handleIncrement}>Increment</Button>
        <Button type="danger" handler={handleDecrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
}
