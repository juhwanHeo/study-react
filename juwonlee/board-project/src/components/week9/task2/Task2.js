import { useCounter } from './useCounter.js';

export default function Task2() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}
