function TodoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p>Справ поки немає</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>                        
          {todo.name}{" "}
          <button onClick={() => onDelete(todo.id)}>✕</button>    
        </li>
      ))}
    </ul>
  );
}

export default TodoList;