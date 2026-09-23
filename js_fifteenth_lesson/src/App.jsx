import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    // 1. если text пустой — выйти (охранник)
    if (text.trim() === "") {
    return;
  }
    // 2. добавить text в конец списка дел
    setTodos([...todos, text]);
    // 3. очистить поле
    setText("");
  }

  return (
    <>
      <h1>To Do List</h1>

      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <button type="submit">Додати</button>
      </form>

      <p>Всього справ: {todos.length}</p>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;