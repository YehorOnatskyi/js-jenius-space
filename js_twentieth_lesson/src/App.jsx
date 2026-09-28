import { Component } from "react";
import TodoList from "./components/TodoList.jsx";
import styles from "./App.module.css";

const MAX = 5;

class App extends Component {
  state = { text: "", todos: [] };

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

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text.trim() === "") return;
    this.setState({
      todos: [...this.state.todos, { id: Date.now(), name: this.state.text }],
      text: "",
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
    const count = this.state.todos.length;
    const percent = Math.min((count / MAX) * 100, 100);

    return (
      <div className={styles.page}>
        <h1 className={styles.title}>Мої справи</h1>

        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            value={this.state.text}
            onChange={(event) => this.setState({ text: event.target.value })}
          />
          <button className={styles.button} type="submit">Додати</button>
        </form>

        <p className={`${styles.counter} ${count > 3 ? styles.counterWarn : ""}`}>
          Всього справ: {count}
        </p>

        <div className={styles.bar}>
          <div className={styles.barFill} style={{ width: `${percent}%` }} />
        </div>

        <TodoList todos={this.state.todos} onDelete={this.handleDelete} />

        <button className={styles.clear} onClick={this.handleClear}>Clear Todo List</button>
      </div>
    );
  }
}

export default App;