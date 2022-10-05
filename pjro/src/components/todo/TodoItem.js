import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone,MdDelete} from 'react-icons/md';
import {useRecoilState} from 'recoil';
import { todoListState } from '../../recoil/Recoil';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
        display: initial;
        }
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.done &&
        css`
        border: 1px solid #9E58D6;
        color: #9E58D6;
    `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props =>
        props.done &&
        css`
        color: #ced4da;
    `}
`;

const replaceItemAtIndex =(arr,index,newValue)=>{
    return [...arr.slice(0,index),newValue,...arr.slice(index+1)];
}

const removeItemAtIndex =(arr,index)=>{
    return [...arr.slice(0,index),...arr.slice(index+1)];
}

function TodoItem({ item }) {

    const [todoList,setTodoList]=useRecoilState(todoListState);
    const index=todoList.findIndex((listItem)=> listItem.id === item.id);

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList,index,{...item,done:!item.done});

        setTodoList(newList)
    }

    const deleteItem = () => {
        const newList=removeItemAtIndex(todoList,index);

        setTodoList(newList);
    }

    return (
    <TodoItemBlock>
        <CheckCircle done={item.done} onClick={toggleItemCompletion}>{item.done && <MdDone />}</CheckCircle>
        <Text done={item.done}>{item.text}</Text>
        <Remove>
            <MdDelete onClick={deleteItem}/>
        </Remove>
    </TodoItemBlock>
    );
}

export default TodoItem;