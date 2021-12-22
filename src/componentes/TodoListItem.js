import React from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <li
            key={ todo.id }
            className="list-group-item animate__animated animate__fadeInDown animate__faster"    
        >
            <p 
                className={`${todo.done && 'complete'}`}
                onClick={ () => handleToggle( todo.id ) }
            >
                { index + 1 }. { todo.desc } 
            </p>   

            <button
                    className="btn btn-danger"
                    onClick={ () => handleDelete(todo.id) }
            >
                Borrar
            </button>
        </li>
    )
}
