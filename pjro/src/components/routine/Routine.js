import React,{useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { routineListState } from '../../recoil/Recoil';
import RoutineCreate from './RoutineCreate';
import RoutineHead from './RoutineHead';
import RoutineList from './RoutineList';
import RoutineTemplate from './RoutineTemplate';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase';


function Routine(){
    const [routineItems,setRoutineItems]=useRecoilState(routineListState);

    useEffect(()=>{
        const getAllRoutines = async () => {
            const q=query(collection(db,"routine"));
            let tmp=[]

            const querySnapshot=await getDocs(q);
            querySnapshot.forEach((doc) => {
                tmp.push({id:doc.id , title:doc.data().title, mon:doc.data().mon, tue:doc.data().tue, wed:doc.data().wed, thr:doc.data().thr, fri:doc.data().fri, sat:doc.data().sat, sun:doc.data().sun})
            });

            setRoutineItems(tmp);
        }
        getAllRoutines()
    },[])

    return(
        <RoutineTemplate>
            <RoutineHead/>
            <RoutineList/>
            <RoutineCreate/>
        </RoutineTemplate>
    )
}

export default Routine;