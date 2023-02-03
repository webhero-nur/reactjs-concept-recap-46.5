import React, { useEffect, useState } from 'react';
import './Todos.css'
import Todo from '../../components/Todo/Todo'

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <table>
                <caption style={{ fontSize: '50px' }}>Todo List: {todos.length}</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserId</th>
                        <th>Completed</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => <Todo
                            todo={todo}
                            key={todo.id}
                        ></Todo>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todos;