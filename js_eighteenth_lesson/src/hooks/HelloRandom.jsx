import { useState } from "react";

const names = ["Іван", "Марія", "Олег", "Софія", "Петро"];

function HelloRandom() {
  const [message, setMessage] = useState("");

  function handleClick() {
    const index = Math.floor(Math.random() * names.length);
    setMessage(`Hello ${names[index]}`);
  }

  return (
    <section>
      <h2>3. useState</h2>
      <button onClick={handleClick}>Привітатись</button>
      <p>{message}</p>
    </section>
  );
}

export default HelloRandom;