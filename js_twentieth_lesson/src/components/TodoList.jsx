import styles from "./TodoList.module.css";

function TodoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p className={styles.empty}>Справ поки немає</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.item}>
          {todo.name}
          <button className={styles.del} onClick={() => onDelete(todo.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;