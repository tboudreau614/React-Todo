import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
            onChange = {props.handleTodoChange}
            type = "text"
            name = "todo"
            value = {props.value}
            placeholder = "To Do..."
            />
            <button onClick = {props.handleAddTodo}>Add Item</button>
            <button onClick = {props.handleClearTodo}>Clear Item</button>
        </form>
    );
};

export default TodoForm;