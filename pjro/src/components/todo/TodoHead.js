import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {  countTodoWorkState, todoListState } from '../../recoil/Recoil';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }

    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }

    .tasks-left {
        color: #9E58D6;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead(){
    const countTodoWork= useRecoilValue(countTodoWorkState);

    const days=['일','월','화','수','목','금','토'];

    let today = new Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일

    
    
    
    return(
        <TodoHeadBlock>
            <h1>{year}년 {month}월 {date}일</h1>
            <div className='day'>{days[day]}요일</div>
            <div className='tasks-left'>할 일 {countTodoWork}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;