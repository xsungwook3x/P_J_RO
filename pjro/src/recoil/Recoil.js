import {atom,selector} from 'recoil';

export const todoListState=atom({
    key:'todoListState',
    default:[
        {
        id: 1,
        title: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        title: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id: 3,
        title: 'Context 만들기',
        done: false
    },
    {
        id: 4,
        title: '기능 구현하기',
        done: false
    }]
})

export const routineListState=atom({
    key:'routineListState',
    default:[
        {
            id: 1,
            title: 'CS 스터디',
            mon: true,
            tue: true,
            wed: false,
            thr: false,
            fri: false,
            sat: false,
            sun: false

        }
    ]
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