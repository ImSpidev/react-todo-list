import React from 'react';
import './TodoCounter.css';
import { BsCardChecklist } from 'react-icons/bs';

function TodoCounter() {
    return (
        <React.Fragment>
            <h1 className="WelcomeTitle"> Just DO IT! <BsCardChecklist viewBox="0 0 16 12"/></h1>
            <h2 className="TodoCounter">Has completado 2 de 3 TODO's</h2>
        </React.Fragment>
    );
};

export { TodoCounter };