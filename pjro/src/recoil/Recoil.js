import {atom} from 'recoil';

export const todoListState=atom({
    key:'todoListState',
    default:[
        {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id: 3,
        text: 'Context 만들기',
        done: false
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: false
    }]
})

export const routineListState=atom({
    key:'routineListState',
    default:[
        {
            id: 1,
            text: 'CS 스터디',
            mon: true,
            tue: true,
            wed: false,
            thr: false,
            fri: false,
            sat: false,
            sun: false

        }
    ]
})