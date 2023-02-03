import React, { useEffect, useState } from 'react';
import './Todos.css'
import Todo from '../../components/Todo/Todo'

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

    return (
        <div>
            {
                todos.map(todo => <Todo title={todo.title}></Todo>)
            }
        </div>
    )
}

export default Todos;