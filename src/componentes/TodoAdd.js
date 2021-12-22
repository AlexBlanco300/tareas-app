import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
    
    const [ {description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();
    } 

    return (
        <>
            <h4 className="text-center widthTit animate__animated animate__fadeIn animate__faster">Agregar Tarea</h4>
            <hr />  

            <form onSubmit={ handleSubmit }>

                <input
                    type="text" 
                    name="description"
                    className="form-control animate__animated animate__flash"
                    placeholder="Hoy voy a..."
                    onChange={ handleInputChange }
                    autoComplete='off'
                    value={ description }
                />
                <div className = "d-grid gap-2 mt-2">
                    <button 
                        className="btn btn-primary mt-1 animate__animated animate__flash"
                        type="submit"
                    > 
                        Agregar 
                    </button>
                </div>

            </form>
        </>
    )
}
