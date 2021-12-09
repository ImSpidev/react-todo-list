import React from 'react';
import './TodoItem.css';
import { BiTrash, BiCheckDouble } from 'react-icons/bi';


function TodoItem(props) {

    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}            
            >
            <BiCheckDouble />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete} 
            >
            <BiTrash />
            </span>
        </li>
    );
};


export { TodoItem };