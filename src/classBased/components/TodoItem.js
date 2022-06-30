import React, { Component } from 'react'
import styles from './TodoItem.module.css';

class TodoItem extends Component {


  state = {
    editing: false,
  }


  handleEditing =() =>{
    this.setState({
      editing: true,
    })
  }

  handleUpdatedDone = (event) =>{
    if(event.key === "Enter"){
      this.setState({
        editing: false
      })
    }
  };

  componentWillUnmount(){
    console.log("Cleaning up ...");
  }


  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    const {id, completed, title} = this.props.todos_for_item;

    let viewMode = {};
    let editMode = {};

    if(this.state.editing){
      viewMode.display = "none";
    }
    else {
      editMode.display = "none";
    }

   


    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input 
            type={"checkbox"} 
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps_for_item(this.props.todos_for_item.id)} />
          
          <span style={completed? completedStyle : null}>
            {title}
          </span>

          {/* {this.props.todos_for_item.title} */}

          <button 
            onClick={() => this.props.deleteTodoProps_for_item(this.props.todos_for_item.id)}>
            Delete
          </button>
        </div>
        <input 
          type="text" 
          style={editMode} 
          className={styles.textInput}
          value={title}
          onChange={(e) =>{
            this.props.setUpdate_for_item(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone} />
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