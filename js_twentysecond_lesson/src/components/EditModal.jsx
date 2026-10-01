import { useEffect, useState } from "react";
import { getTodo, updateTodo } from "../api/todos.js";
import TodoForm from "./TodoForm.jsx";
import styles from "./EditModal.module.css";

function EditModal({ id, onClose, onSaved }) {
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
      onSaved();
    } catch (err) {
      console.error(err);
      setError("Не вдалося зберегти зміни");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <h2 className={styles.title}>Редагувати завдання</h2>

        {isLoading && <p className={styles.state}>Завантаження…</p>}
        {error && <p className={styles.error}>{error}</p>}

        {todo && !isLoading && (
          <TodoForm
            initial={todo}
            onSubmit={handleSave}
            onCancel={onClose}
            submitLabel="Зберегти"
            isSaving={isSaving}
          />
        )}

        {!todo && !isLoading && (
          <button className={styles.close} onClick={onClose}>Закрити</button>
        )}
      </div>
    </div>
  );
}

export default EditModal;
