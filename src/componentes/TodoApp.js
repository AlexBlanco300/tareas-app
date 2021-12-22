import React, { useReducer } from 'react';
import { useEffect } from 'react/cjs/react.development';
import '../styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = ( todoId ) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = ( todoId ) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        }); //dispatch de ese objeto, ahorrandome asi crear el action.

    }
    
    return (
        <>
            <h1 className="text-center animate__animated animate__fadeIn animate__faster">Lista de tareas personales</h1><br />
            <h4 className="animate__animated animate__fadeIn animate__faster">Tareas totales: { todos.length }</h4>
            <hr /><br />

            <div className='row'>
                
                <div className="col-7">
                    
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}  />
                
                </div>

                <div className="col-5">
                    
                    <TodoAdd handleAddTodo={ handleAddTodo } />
                    
                </div>

            </div>

        </>
    )
}
