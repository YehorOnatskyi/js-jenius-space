import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getTodo, updateTodo } from "../api/todos.js";
import TodoForm from "../components/TodoForm.jsx";
import styles from "../App.module.css";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [todo, setTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      setError("");
      try {
        setTodo(await getTodo(id));
      } catch (err) {
        console.error(err);
        setError("Не вдалося завантажити завдання");
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [id]);

  async function handleSave(values) {
    setIsSaving(true);
    setError("");
    try {
      await updateTodo(id, values);
      navigate("/todo-list");
    } catch (err) {
      console.error(err);
      setError("Не вдалося зберегти зміни");
    } finally {
      setIsSaving(false);
    }
  }

  if (isLoading) {
    return <p className={styles.state}>Завантаження…</p>;
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Редагувати завдання</h1>

      {error && <p className={styles.banner}>{error}</p>}

      {todo ? (
        <TodoForm
          initial={todo}
          onSubmit={handleSave}
          cancelTo="/todo-list"
          submitLabel="Зберегти"
          isSaving={isSaving}
        />
      ) : (
        <Link to="/todo-list" className={styles.retry}>Назад до списку</Link>
      )}
    </div>
  );
}

export default EditPage;
