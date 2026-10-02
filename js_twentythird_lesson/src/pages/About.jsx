import styles from "./pages.module.css";

function About() {
  return (
    <section className={styles.card}>
      <h1 className={styles.title}>Про застосунок</h1>
      <p className={styles.text}>
        Навчальний Todo List: список справ зі створенням, редагуванням,
        позначкою «виконано» та видаленням. Дані зберігаються на сервері,
        інтерфейс підлаштовується під телефон, планшет і комп’ютер.
      </p>

      <h2 className={styles.title} style={{ fontSize: 20 }}>Технології</h2>
      <ul className={styles.list}>
        <li><b>React 19</b> — інтерфейс і стан</li>
        <li><b>React Router 7</b> — сторінки та навігація</li>
        <li><b>Vite</b> — збірка та дев-сервер</li>
        <li><b>CSS Modules</b> — стилі без конфліктів імен</li>
        <li><b>json-server</b> — REST API для розробки</li>
      </ul>

      <h2 className={styles.title} style={{ fontSize: 20 }}>Про автора</h2>
      <p className={styles.text}>
        Єгор Онацький — фронтенд-розробник лендингів. Навчаюся на курсі
        Genius Space FullStack, цей застосунок — підсумкова робота блоку React.
      </p>
    </section>
  );
}

export default About;
