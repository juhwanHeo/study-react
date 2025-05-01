import { useCounter } from "./useCounter.js";
import "./styles.css";

export default function Counter() {
  const count = useCounter();

  return <h1>Seconds passed: {count}</h1>;
}
