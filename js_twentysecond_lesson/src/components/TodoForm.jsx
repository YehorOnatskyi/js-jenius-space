import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ initial, onSubmit, onCancel, submitLabel, isSaving }) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [completed, setCompleted] = useState(initial?.completed ?? false);

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim() === "") {
      return;
    }
    onSubmit({ title: title.trim(), description: description.trim(), completed });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.field}>
        <label className={styles.label} htmlFor="title">Назва</label>
        <input
          id="title"
          className={styles.input}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </p>

      <p className={styles.field}>
        <label className={styles.label} htmlFor="description">Опис</label>
        <input
          id="description"
          className={styles.input}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </p>

      <label className={styles.checkboxRow}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={(event) => setCompleted(event.target.checked)}
        />
        Виконана
      </label>

      <div className={styles.actions}>
        <button className={styles.submit} type="submit" disabled={isSaving}>
          {isSaving ? "Зберігаю…" : submitLabel}
        </button>
        <button className={styles.cancel} type="button" onClick={onCancel}>
          Скасувати
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
