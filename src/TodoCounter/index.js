import React from 'react';
import { TodoContext } from '../TodoContext'
import './TodoCounter.css';
import { BsCardChecklist } from 'react-icons/bs';

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <h1 className="WelcomeTitle"> Just DO IT! <BsCardChecklist viewBox="0 0 16 12"/></h1>
            <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODO's</h2>
        </React.Fragment>
    );
};

export { TodoCounter };