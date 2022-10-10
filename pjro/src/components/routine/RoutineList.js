import React from 'react';
import styled from 'styled-components';

import {routineListState} from '../../recoil/Recoil.js';
import { useRecoilState } from "recoil";
import RoutineItem from './RoutineItem.js';

const RoutineListBlock=styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;

`;

function RoutineList() {

    const [routineItems,setRoutineItems]=useRecoilState(routineListState)

    return (
    <RoutineListBlock>
        {
            routineItems.map((item)=>{
                return <RoutineItem item={item}/>
            })
        }
    </RoutineListBlock>)
}

export default RoutineList;