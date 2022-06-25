import React, { Component } from 'react'
import TodoItem from './TodoItem';

class TodosList extends Component {
  render() {
    return (
        <ul>
            {this.props.todos.map(todo => (
                <TodoItem 
                  key={todo.id} 
                  todos_for_item = {todo}
                  handleChangeProps_for_item = {this.props.handleChangeProps} />
            ))}
        </ul>
    );
  }
}

export default TodosList;
