import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoHead from './components/todo/TodoHead';
import TodoList from './components/todo/TodoList';
import TodoTemplate from './components/todo/TodoTemplate';
import TodoCreate from './components/todo/TodoCreate';

const GlobalStyle=createGlobalStyle`
  body {
    background: #e9ecef;
    margin:0;
    padding: 0;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplate>

    </div>
  );
}

export default App;
