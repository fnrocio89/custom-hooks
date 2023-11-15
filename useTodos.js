import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../0801-useReducer/todoReducer';

export const useTodos = () => {

      // ------------------------------------------------------------

      const initialState = [
        // {
        //     id: new Date().getTime(),
        //     done: false,
        //     description: 'Recolectar La Piedra del alma'
        // },

    ];
    // -----------------Mantiene los todos en el LocalStoge aun cuando se actualiza la pag-----
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }
    // ------------------------------------------------------------------------

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    // -----------------Annade los todos al localStorage-------------------------

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])

    //--------------------------------------------------------------


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] addTodo',
            payload: todo
        }
        dispatch(action);

    };
    // --------------------------------------------------------------

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] RemoveTodo',
            payload: id
        }
        dispatch(action);

    };
    // ---------------------------------------------------------------

    const handleToggleTodo = (id) => {
        // console.log(id)
        dispatch(
            {
                type:'[TODO] ToggleTodo',
                payload: id
            }

        );
        

    }
    //----------------------------------------------------------------

    const countTodos = todos.length;
    const pendingTdosCount = todos.filter(todo => todo.done).length;
    // const prueba = todos.filter(todo => !todo.done);
    // console.log(prueba)

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    countTodos,
    pendingTdosCount

  };
    
  
}
