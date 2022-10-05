import React from 'react';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';
import TodoCreate from './TodoCreate';

function Todo(){

    return(
        <>
        <TodoTemplate>
            <TodoHead/>
            <TodoList/>
            <TodoCreate/>
        </TodoTemplate>
        </>
    )
}

export default Todo;