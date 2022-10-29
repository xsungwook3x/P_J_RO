import React,{useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import { routineListState } from '../../recoil/Recoil';
import {useRecoilState} from 'recoil';
import { Button } from 'bootstrap';
import { collection, query, getDocs,doc,setDoc} from "firebase/firestore";
import { db } from '../../firebase';

const CircleButton=styled.button`
background: gray;
&:hover {
    background: orange;
}
&:active {
    background: orange;
}

z-index: 5;
cursor: pointer;
width: 80px;
height: 80px;
display: block;
align-items: center;
justify-content: center;
font-size: 60px;
position: absolute;
left: 50%;
bottom: 0px;
transform: translate(-50%, 50%);
color: white;
border-radius: 50%;
border: none;
outline: none;
display: flex;
align-items: center;
justify-content: center;

transition: 0.125s all ease-in;
${props =>
    props.open &&
    css`
    background: #ff6b6b;
    &:hover {
        background: #ff8787;
    }
    &:active {
        background: #fa5252;
    }
    transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    text-align:center;
`;

const InsertForm = styled.div`
    background: #f8f9fa;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 60px;
    
    
    border-top: 1px solid #e9ecef;
`;

const InsertAllForm = styled.div`
    background: #f8f9fa;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

`

const DayButton = styled.button`
    width: 42px;
    height: 42px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    background: white;
    color: #ced4da;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin:10px;
    ${props =>
        props.done &&
        css`
        border: 1px solid orange;
        color: orange;
    `}

`

const ButtonForm=styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom:20px;
`

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

let id = 5;
function getId() {
    return id++;
}

function RoutineCreate() {
    const [open, setOpen] = useState(false);
    const [input,setInput]=useState('');
    const [mon,setMon]=useState(false);
    const [tue,setTue]=useState(false);
    const [wed,setWed]=useState(false);
    const [thr,setThr]=useState(false);
    const [fri,setFri]=useState(false);
    const [sat,setSat]=useState(false);
    const [sun,setSun]=useState(false);

    const [routineItems,setRoutineItems]=useRecoilState(routineListState);

    const onToggle = () => setOpen(!open);

    const getAllRoutines = async () => {
        const q=query(collection(db,"routine"));
        let tmp=[]

        const querySnapshot=await getDocs(q);
        querySnapshot.forEach((doc) => {
            tmp.push({id:doc.id , title:doc.data().title, mon:doc.data().mon, tue:doc.data().tue, wed:doc.data().wed, thr:doc.data().thr, fri:doc.data().fri, sat:doc.data().sat, sun:doc.data().sun})
        });

        setRoutineItems(tmp);
    }

    const addItem=async ()=>{
        if(input!==''){
            let data={
                title: input,
                mon: mon,
                tue: tue,
                wed: wed,
                thr: thr,
                fri: fri,
                sat: sat,
                sun: sun
            }

            const newRoutineRef=doc(collection(db,"routine"));

            await setDoc(newRoutineRef,data)
            
            setInput('')
            setMon(false)
            setTue(false)
            setWed(false)
            setThr(false)
            setFri(false)
            setSat(false)
            setSun(false)

            getAllRoutines()
        }
    }

    const onChange=(e)=>{setInput(e.target.value)};

    const onKeyPress= (e)=>{
        if(e.key ==='Enter'){
            addItem();
        }
    }

    

    return (
    <>
        {open && (
            <InsertFormPositioner>
                
                    
                <InsertAllForm>
                    
                    <InsertForm>
                        <ButtonForm>
                        <DayButton onClick={()=> setMon(!mon)} done={mon}>월</DayButton>
                        <DayButton onClick={()=> setTue(!tue)} done={tue}>화</DayButton>
                        <DayButton onClick={()=> setWed(!wed)} done={wed}>수</DayButton>
                        <DayButton onClick={()=> setThr(!thr)} done={thr}>목</DayButton>
                        <DayButton onClick={()=> setFri(!fri)} done={fri}>금</DayButton>
                        <DayButton onClick={()=> setSat(!sat)} done={sat}>토</DayButton>
                        <DayButton onClick={()=> setSun(!sun)} done={sun}>일</DayButton>
                        </ButtonForm>
                        <Input autoFocus placeholder="요일을 선택하고 루틴을 입력 후, Enter 를 누르세요" value={input} onChange={onChange} onKeyPress={onKeyPress}/>
                    
                    </InsertForm>
                    
                </InsertAllForm>
                
            </InsertFormPositioner>
        )}
        <CircleButton onClick={onToggle} open={open}>
            <MdAdd />
        </CircleButton>
    </>
    );
}

export default RoutineCreate;