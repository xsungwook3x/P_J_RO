import React, { useEffect } from 'react';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';
import TodoCreate from './TodoCreate';
import { db } from '../../firebase';

function Todo(){
    useEffect(()=>{
        db.collection('todo').onSnapshow((snapshot) => {
            const todoArray=snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log(todoArray);
        });
    },[]);
    
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