import React from "react";
import Button from "./Button";
import Count from "./Count";

export default function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center shadow bg-white rounded-md space-y-3">
      <Count count={count} />
      <div className="space-x-3 flex">
        <Button handler={onIncrement}>Increment</Button>
        <Button type="danger" handler={onDecrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
}
