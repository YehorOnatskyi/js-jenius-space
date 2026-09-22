import { useState } from "react";

function CounterFn({ title }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{title}: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default CounterFn;