import { Component } from "react";
import TodoList from "./components/TodoList.jsx";

class App extends Component {
  state = {
    text: "",
    todos: [],
  };

  componentDidMount() {
    const saved = localStorage.getItem("todos");
    if (saved) {
      this.setState({ todos: JSON.parse(saved) });        // 1
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {         // 2
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text.trim() === "") {
      return;
    }
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
    this.setState({ todos: [] });                 // 4
  };

  render() {
    return (
      <>
        <h1>Мої справи</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.text}
            onChange={(event) => this.setState({ text: event.target.value })}
          />
          <button type="submit">Додати</button>
        </form>
        <p>Всього справ: {this.state.todos.length}</p>
        <TodoList todos={this.state.todos} onDelete={this.handleDelete} />
        <button onClick={this.handleClear}>Clear Todo List</button>
      </>
    );
  }
}

export default App;