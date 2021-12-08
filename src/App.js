import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


import './App.css';

const todos = [
  {text: 'Tomar curso de intro a React', completed: true},
  {text: 'Crear portafolio', completed: false},
  {text: 'Tomar awa', completed: false}
];


function App(props) {
  return (
    <React.Fragment>
      <div className="MainContainer">
          <TodoCounter />
          <TodoSearch />
            
          <TodoList>
            {todos.map((todo) => 
              <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              />
            )}  
          </TodoList>
          
          
          <CreateTodoButton />
      </div>
    </React.Fragment>
  );
}

export default App;
