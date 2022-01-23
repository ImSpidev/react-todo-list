import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

const defaultTodos = [
  {text: 'Tomar curso de intro a React', completed: true}
];

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
        <div className="MainContainer">
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Oops! Something went wrong!</p>}
                {loading && <p>Loading, please wait...</p>}
                {(!loading && !searchedTodos.length) && <p>No hay TODO's pendientes, ¡Crea uno nuevo!</p>}


                {searchedTodos.map((todo) => 
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                )}  
            </TodoList>
                
            {!!openModal && (
                <Modal>
                    <p>{defaultTodos[0]? defaultTodos[0].text : ''}</p>
                </Modal>
            )}
            
            
            <CreateTodoButton 
                setOpenModal={
                    setOpenModal
                }
            />
        </div>
        </React.Fragment>
    );
}



export { AppUI };