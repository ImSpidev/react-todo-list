import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
    return(
        <React.Fragment>
        <div className="MainContainer">
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                {({
                    error,
                    loading,
                    searchedTodos,
                    completeTodo,
                    deleteTodo    
                })=> (
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
                )}
            </TodoContext.Consumer>
            
            
            <CreateTodoButton />
        </div>
        </React.Fragment>
    );
}



export { AppUI };