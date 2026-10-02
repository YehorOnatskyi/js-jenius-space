import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

function Layout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/todo-list" className={navClass}>Туду Ліст</NavLink>
          <NavLink to="/about" className={navClass}>Про застосунок</NavLink>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
