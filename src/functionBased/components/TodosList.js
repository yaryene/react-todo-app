import React from 'react'
import TodoItem from './TodoItem';

const TodosList =(props) => {
    return (
        <ul>
            {props.todos.map(todo => (
                <TodoItem 
                  key={todo.id} 
                  todos_for_item = {todo}
                  handleChangeProps_for_item = {props.handleChangeProps}
                  deleteTodoProps_for_item = {props.deleteTodoProps}
                  setUpdate_for_item = {props.setUpdate} />
            ))}
        </ul>
    )
  }
export default TodosList;
