import { Component } from "react";
import TodoList from "./components/TodoList.jsx";
import styles from "./App.module.css";

const MIN = 3;
const MAX = 20;

class App extends Component {
  state = { text: "", todos: [], filter: "all", error: "" };

  componentDidMount() {
    const saved = localStorage.getItem("todos");
    if (saved) {
      this.setState({ todos: JSON.parse(saved) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  handleTextChange = (event) => {
    const text = event.target.value;
    let error = "";
    if (text.length > 0 && text.trim().length < MIN) {
      error = `Мінімум ${MIN} символи`;
    } else if (text.length > MAX) {
      error = `Максимум ${MAX} символів`;
    }
    this.setState({ text, error });
  };
   handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.error !== "" || this.state.text.trim() === "") return;
    this.setState({
      todos: [...this.state.todos, { id: Date.now(), name: this.state.text, done: false }],
      text: "",
    });
   };
  handleToggle = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    });
  };

  handleDelete = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };

  handleClear = () => {
    localStorage.removeItem("todos");
    this.setState({ todos: [] });
  };

 render() {
    const { todos, filter, text, error } = this.state;

    const visible = todos.filter((todo) => {
      if (filter === "active") return !todo.done;
      if (filter === "done") return todo.done;
      return true;
    });

    return (
      <div className={styles.page}>
        <h1 className={styles.title}>Мої справи</h1>

        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            className={`${styles.input} ${error ? styles.inputError : ""}`}
            value={text}
            onChange={this.handleTextChange}
          />
          <button className={styles.button} type="submit" disabled={error !== ""}>
            Додати
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.toolbar}>
          <select
            className={styles.select}
            value={filter}
            onChange={(event) => this.setState({ filter: event.target.value })}
          >
            <option value="all">Всі</option>
            <option value="active">Активні</option>
            <option value="done">Завершені</option>
          </select>
        </div>

        <p className={styles.counter}>Показано: {visible.length} з {todos.length}</p>

        <TodoList todos={visible} onToggle={this.handleToggle} onDelete={this.handleDelete} />

        <button className={styles.clear} onClick={this.handleClear}>Clear Todo List</button>
      </div>
    );
  }
}

export default App;