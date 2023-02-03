import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <p style={{ backgroundColor: 'cyan', padding: '5px' }}>Title: {props.title}</p>
        </div>
    )
}

export default Todo;