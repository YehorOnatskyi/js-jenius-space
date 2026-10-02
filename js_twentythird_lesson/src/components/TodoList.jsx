import { Link } from "react-router-dom";
import styles from "./TodoList.module.css";

function TodoList({ todos, onDelete, busyId }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.item}>
          <div className={styles.body}>
            <p className={`${styles.title} ${todo.completed ? styles.done : ""}`}>
              {todo.title}
            </p>
            {todo.description && (
              <p className={styles.description}>{todo.description}</p>
            )}
          </div>

          <div className={styles.actions}>
            <Link
              className={styles.edit}
              to={`/todo-list/${todo.id}`}
              title="Редагувати"
            >
              ✎
            </Link>
            <button
              className={styles.del}
              onClick={() => onDelete(todo.id)}
              disabled={busyId !== null}
              title="Видалити"
            >
              {busyId === todo.id ? "…" : "✕"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
