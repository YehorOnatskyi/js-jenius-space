import { useEffect, useState } from "react";
import { getTodos, createTodo, deleteTodo } from "../api/todos.js";
import TodoList from "../components/TodoList.jsx";
import TodoForm from "../components/TodoForm.jsx";
import styles from "../App.module.css";

function TodoListPage() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState("");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [actionError, setActionError] = useState("");

  async function load() {
    setIsLoading(true);
    setLoadError("");
    try {
      setTodos(await getTodos());
    } catch (err) {
      console.error(err);
      setLoadError("Не вдалося завантажити список. Перевірте, чи запущено сервер.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleCreate(values) {
    setIsSaving(true);
    setActionError("");
    try {
      await createTodo(values);
      setIsFormOpen(false);
      await load();
    } catch (err) {
      console.error(err);
      setActionError("Не вдалося додати завдання");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(id) {
    setDeletingId(id);
    setActionError("");
    try {
      await deleteTodo(id);
      await load();
    } catch (err) {
      console.error(err);
      setActionError("Не вдалося видалити завдання");
    } finally {
      setDeletingId(null);
    }
  }

  if (isLoading) {
    return <p className={styles.state}>Завантаження…</p>;
  }

  if (loadError) {
    return (
      <div className={`${styles.state} ${styles.stateError}`}>
        <p>{loadError}</p>
        <button className={styles.retry} onClick={load}>Спробувати ще раз</button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Мої справи</h1>

      {actionError && <p className={styles.banner}>{actionError}</p>}

      {todos.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyText}>Наразі у вас немає завдань</p>
        </div>
      ) : (
        <TodoList todos={todos} onDelete={handleDelete} busyId={deletingId} />
      )}

      {isFormOpen ? (
        <TodoForm
          onSubmit={handleCreate}
          onCancel={() => setIsFormOpen(false)}
          submitLabel="Додати"
          isSaving={isSaving}
        />
      ) : (
        <button className={styles.addButton} onClick={() => setIsFormOpen(true)}>
          Додати todo
        </button>
      )}
    </div>
  );
}

export default TodoListPage;
