import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItemText: "Foo",
      todos: ["Loading..."]
    };
  }
  componentDidMount() {
    fetch("https://localhost:44326/api/todos")
      .then(res => res.json())
      .then(json => this.setState({ todos: json }));
  }

  resetAll = () => {
    this.setState({ currentItemText: "", todos: [] });
  };
  setText = text => {
    this.setState({ currentItemText: text });
  };
  addNew = text => {
    fetch("https://localhost:44326/api/todos", {
      method: "POST",
      body: JSON.stringify(text),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          const newTodos = [...this.state.todos, text];
          this.setState({ todos: newTodos });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  render() {
    return (
      <div>
        <AddTodo
          text={this.state.currentItemText}
          setText={this.setText}
          addNew={this.addNew}
        />

        <TodoList todos={this.state.todos} />

        <button onClick={this.resetAll}>Reset All</button>
      </div>
    );
  }
}
/*
 */

export default App;
