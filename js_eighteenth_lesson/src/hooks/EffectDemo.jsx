import { useState, useEffect } from "react";

function EffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("EffectDemo оновився, count =", count);
  }, [count]);                                // 1

  return (
    <section>
      <h2>1. useEffect</h2>
      <p>Лічильник: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </section>
  );
}

export default EffectDemo;