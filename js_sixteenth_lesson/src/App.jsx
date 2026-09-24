import { useState } from "react";
import TodoList from "./components/TodoList.jsx";

const startTodos = [
  { id: 1, name: "Список справ" },
  { id: 2, name: "Вивчити React" },
  { id: 3, name: "Створити новий проект" }
];

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(startTodos);

  function handleSubmit(event) {
    event.preventDefault();
    if (text.trim() === "") {
      return;
    }
    setTodos([...todos, { id: Date.now(), name: text }]);         setText(""); 
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id)); 
    
  }

  return (
    <>
      <h1>Мої справи</h1>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <button type="submit">Додати</button>
      </form>
      <p>Всього справ: {todos.length}</p>
      <TodoList todos={todos} onDelete={handleDelete} />
    </>
  );
}

export default App;