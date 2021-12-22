import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import './App.css';

// const defaultTodos = [
//   {text: 'Tomar curso de intro a React', completed: true},
//   {text: 'Crear portafolio', completed: false},
//   {text: 'Tomar awa', completed: false}
// ];



function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
