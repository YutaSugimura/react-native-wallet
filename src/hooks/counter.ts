import { useState } from 'react';

export const useCounterCore = (initialState?: number) => {
  const [count, setCount] = useState<number>(initialState ? initialState : 0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};
