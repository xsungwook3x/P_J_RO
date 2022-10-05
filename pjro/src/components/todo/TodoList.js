import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import {todoListState} from '../../recoil/Recoil.js';
import { useRecoilState } from "recoil";

const TodoListBlock=styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;

`;

function TodoList() {

    const [todoItems,setTodoItems]=useRecoilState(todoListState)

    return (
    <TodoListBlock>
        {
            todoItems.map((item)=>{
                return <TodoItem item={item} />
            })
        }

    </TodoListBlock>)
}

export default TodoList;