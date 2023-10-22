import { useState } from "react";

export default function useCounterHook(initialValue = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return { increment, decrement, reset, count, setCount };
}
