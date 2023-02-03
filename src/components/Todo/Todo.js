import React from 'react';
import './Todo.css'

const Todo = ({ todo }) => {
    const { id, userId, completed, title } = todo;

    return (
        <tr>
            <td>{id}</td>
            <td>{userId}</td>
            <td>{completed.toString()}</td>
            <td>{title}</td>
        </tr>
    )
}

export default Todo;