import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    return (
      <li>
        <input 
          type={"checkbox"} 
          checked={this.props.todos_for_item.completed}
          onChange={() => this.props.handleChangeProps_for_item(this.props.todos_for_item.id)} />
        {this.props.todos_for_item.title}
      </li>
    )
  }
}

export default TodoItem;

// import React from 'react'

// function TodoItem(props) {
//   return (
//     <li>{props.todos_for_item.title}</li>
//   )
// }

// export default TodoItem;