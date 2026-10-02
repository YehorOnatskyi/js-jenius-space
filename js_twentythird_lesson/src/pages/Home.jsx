import { Link } from "react-router-dom";
import styles from "./pages.module.css";

function Home() {
  return (
    <section className={styles.card}>
      <h1 className={styles.title}>Ласкаво просимо до вашого Todo List</h1>
      <p className={styles.text}>
        Тут ви можете тримати свої справи в одному місці: додавати нові,
        редагувати вже створені, відмічати виконані й видаляти зайві.
      </p>
      <p className={styles.text}>
        Список зберігається на сервері, тому він не зникне після перезавантаження сторінки.
      </p>
      <Link to="/todo-list" className={styles.cta}>Розпочати</Link>
    </section>
  );
}

export default Home;
