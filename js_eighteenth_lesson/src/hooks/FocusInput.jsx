import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  return (
    <section>
      <h2>5. useRef</h2>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Фокус</button>
      <button onClick={() => inputRef.current.blur()}>Блюр</button>
    </section>
  );
}

export default FocusInput;