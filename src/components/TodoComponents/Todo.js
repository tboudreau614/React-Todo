import React from 'react';

const Todo = props => {
    return (
        <div 
        style = {props.todo.completed ? {textDecoration: 'line-through', color: 'red', transition: '0.25s'} : null }
        onClick = {() => props.handleToggleComplete(props.todo.id)}
        >
        {props.todo.task}
        </div>
    );
};

export default Todo;