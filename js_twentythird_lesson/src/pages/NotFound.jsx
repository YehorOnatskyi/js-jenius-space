import { Link } from "react-router-dom";
import styles from "./pages.module.css";

function NotFound() {
  return (
    <section className={styles.card}>
      <h1 className={styles.title}>Сторінку не знайдено</h1>
      <p className={styles.text}>Такої адреси у застосунку немає.</p>
      <Link to="/" className={styles.cta}>На головну</Link>
    </section>
  );
}

export default NotFound;
