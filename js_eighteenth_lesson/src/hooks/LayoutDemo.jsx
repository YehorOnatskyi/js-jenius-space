import { useState, useLayoutEffect, useRef } from "react";

function LayoutDemo() {
  const [count, setCount] = useState(0);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (count === 0) {
      return;
    }
    const paragraph = document.createElement("p");
    paragraph.textContent = `Абзац №${count}`;
    boxRef.current.appendChild(paragraph);
  }, [count]);

  return (
    <section>
      <h2>2. useLayoutEffect</h2>
      <button onClick={() => setCount(count + 1)}>Додати абзац</button>
      <div ref={boxRef}></div>               
    </section>
  );
}

export default LayoutDemo;