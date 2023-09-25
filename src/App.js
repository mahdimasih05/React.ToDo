import React from "react";
import { Component } from "react";
import Todos from "./Todos.js";
import AddTodos from "./AddTodos.js";

class App extends Component{
  state={
    todos:[]
  }
  deleteTodos = (id) => {
    const todos = this.state.todos.filter(
      todo => {
        return todo.id !== id
      }
    )
    this.setState({
      todos
    })
  }
  handleAdd = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({todos})
  }
  render(){
    return(
      <div className="container">
        <Todos deleteTodos={this.deleteTodos} todos={this.state.todos}/>
        <AddTodos handleAdd={this.handleAdd}/>
      </div>
    )
  }
}

export default App;
