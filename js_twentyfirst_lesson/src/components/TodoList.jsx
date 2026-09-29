import styles from "./TodoList.module.css";

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className={styles.empty}>Справ поки немає</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.item}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo.id)}
          />
          <span className={`${styles.name} ${todo.done ? styles.done : ""}`}>
            {todo.name}
          </span>
          <button className={styles.del} onClick={() => onDelete(todo.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;