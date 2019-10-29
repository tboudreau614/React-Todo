import React from 'react';

const TodoForm = props => {
    return (
        <form className = "todoFormStyle" >
            <input className = "todoButtons"
            onChange = {props.handleTodoChange}
            type = "text"
            name = "todo"
            value = {props.value}
            placeholder = "To Do..."
            />
            <button className = 'todoButtons' onClick = {props.handleAddTodo}>Add Item</button>
            <button className = 'todoButtons' onClick = {props.handleClearTodo}>Clear All Items</button>
        </form>
    );
};

export default TodoForm;