import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return(
        <React.Fragment>
        <div className="MainContainer">
            <TodoCounter 
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
                
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
            
            
            <CreateTodoButton />
        </div>
        </React.Fragment>
    );
}



export { AppUI };