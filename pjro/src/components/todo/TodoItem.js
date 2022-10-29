import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone,MdDelete} from 'react-icons/md';
import {useRecoilState} from 'recoil';
import { todoListState } from '../../recoil/Recoil';
import { collection, query, where, getDocs,doc, updateDoc,deleteDoc } from "firebase/firestore";
import { db } from '../../firebase';

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


function TodoItem({ item }) {

    const [todoList,setTodoList]=useRecoilState(todoListState);

    const getAllTodos = async () =>{
        const q = query(collection(db, "todo"));
        let tmp=[]
    
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
            tmp.push({id:doc.id , title:doc.data().title, done:doc.data().done})
            
        });

        setTodoList(tmp)
        }

    const toggleItemCompletion = async () => {
        
        const washingtonRef=doc(db,"todo",item.id);

        await updateDoc(washingtonRef,{
            done:!item.done
        });

        

        getAllTodos();
    }

    const deleteItem = async () => {
        await deleteDoc(doc(db,"todo",item.id))

        getAllTodos();
    }

    return (
    <TodoItemBlock>
        <CheckCircle done={item.done} onClick={toggleItemCompletion}>{item.done && <MdDone />}</CheckCircle>
        <Text done={item.done}>{item.title}</Text>
        <Remove>
            <MdDelete onClick={deleteItem}/>
        </Remove>
    </TodoItemBlock>
    );
}

export default TodoItem;