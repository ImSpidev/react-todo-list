import React from 'react';
import './TodoCounter.css';
import { BsCardChecklist } from 'react-icons/bs';

function TodoCounter({total, completed}) {

    return (
        <React.Fragment>
            <h1 className="WelcomeTitle"> Just DO IT! <BsCardChecklist viewBox="0 0 16 12"/></h1>
            <h2 className="TodoCounter">Has completado {completed} de {total} TODO's</h2>
        </React.Fragment>
    );
};

export { TodoCounter };