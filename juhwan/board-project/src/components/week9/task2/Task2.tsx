import { useCounter } from "./useCounter";

export default function Task2() {
    const {count} = useCounter();
    return <h1>Seconds passed: {count}</h1>;
}
