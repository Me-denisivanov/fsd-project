import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={inc}>+</button>
      <p>{count}</p>
      <button onClick={dec}>-</button>
    </div>
  );
};
