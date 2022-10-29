import {atom,selector} from 'recoil';

export const todoListState=atom({
    key:'todoListState',
    default:[]
})

export const routineListState=atom({
    key:'routineListState',
    default:[]
});

export const countTodoWorkState = selector({
    key:'countTodoWorkState',
    get:({get})=>{
        const list=get(todoListState)

        let count=0
        list.forEach((data)=>{
            if(!data.done){
                count++
            }
        })
        return count
    }
})