import React, { useEffect } from 'react';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';
import TodoCreate from './TodoCreate';
import { collection, query, where, getDocs } from "firebase/firestore";

import { useRecoilState } from 'recoil';
import { todoListState } from '../../recoil/Recoil';
import { db } from '../../firebase';

function Todo(){
    const [todoItems,setTodoItems]=useRecoilState(todoListState);

    useEffect(()=>{
        const getAllTodos = async () =>{
            const q = query(collection(db, "todo"));
            let tmp=[]
        
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
                tmp.push({id:doc.id , title:doc.data().title, done:doc.data().done})
                
            });

            setTodoItems(tmp)
            }
        getAllTodos();
    },[])

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