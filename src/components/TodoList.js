// import { h, render, Component } from 'preact';
import preact from 'preact';
export default class TodoList extends preact.Component {
  constructor(){
    super()
    this.state = {
      todos: [],
      text: ''
    };
    this.setText = this.setText.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo() {
    let { todos, text } = this.state;
    todos = todos.concat({ text });
    this.setState({ todos, text: '' });
  }
  setText(event){
    this.setState({ text: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.addTodo} action="javascript:">
        <input value={this.state.text} onInput={this.setText} />
        <button type="submit">Add</button>
        <ul>
          { this.state.todos.map( todo => (
              <li>{todo.text}</li>
          )) }
        </ul>
      </form>
    );
  }
};
