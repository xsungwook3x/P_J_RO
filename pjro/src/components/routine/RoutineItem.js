import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone,MdDelete} from 'react-icons/md';
import {useRecoilState} from 'recoil';
import { routineListState } from '../../recoil/Recoil';
import { collection, query, getDocs,deleteDoc,doc } from "firebase/firestore";
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

const RoutineItemBlock = styled.div`
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
    color: #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.done &&
        css`
        border: 1px solid orange;
        color: orange;
    `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #ced4da;
    ${props =>
        props.done &&
        css`
        color: #495057;
    `}
`;


function RoutineItem({ item }) {

    const [routineList,setRoutineList]=useRecoilState(routineListState);
    
    const getAllRoutines = async () => {
        const q=query(collection(db,"routine"));
        let tmp=[]

        const querySnapshot=await getDocs(q);
        querySnapshot.forEach((doc) => {
            tmp.push({id:doc.id , title:doc.data().title, mon:doc.data().mon, tue:doc.data().tue, wed:doc.data().wed, thr:doc.data().thr, fri:doc.data().fri, sat:doc.data().sat, sun:doc.data().sun})
        });

        setRoutineList(tmp);
    }

    const deleteItem = async () => {
        await deleteDoc(doc(db,"routine",item.id))

        getAllRoutines();
    }

    const findDay = (mon,tue,wed,thr,fri,sat,sun) => {

        let today = new Date();
        let day = today.getDay();  // 요일

        if(day===0 && sun === true) return true
        else if (day===1 && mon===true) return true
        else if (day===2 && tue===true) return true
        else if (day===3 && wed ===true) return true
        else if (day===4 && thr === true) return true
        else if(day===5 && fri===true) return true
        else if ( day===6 && sat===true) return true
        else return false
    }

    return (
    <RoutineItemBlock>
        <CheckCircle done={findDay(item.mon,item.tue,item.wed,item.thr,item.fri,item.sat,item.sun)} >{<MdDone />}</CheckCircle>
        <Text done={findDay(item.mon,item.tue,item.wed,item.thr,item.fri,item.sat,item.sun)}>{item.title}</Text>
        <Remove>
            <MdDelete onClick={deleteItem}/>
        </Remove>
    </RoutineItemBlock>
    );
}

export default RoutineItem;