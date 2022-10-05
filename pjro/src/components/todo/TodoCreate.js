import React,{useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import { todoListState } from '../../recoil/Recoil';
import {useRecoilState} from 'recoil';

const CircleButton=styled.button`
background: gray;
&:hover {
    background:#9E58D6
}
&:active {
    background: #9E58D6;
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

const InsertForm = styled.form`
    background: #f8f9fa;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 12px;
    
    
    border-top: 1px solid #e9ecef;
`;

const InsertAllForm = styled.div`
    background: #f8f9fa;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

`

const InsertButton = styled.button`
    background-color: #9E58D6;
    color: white;
    font-size:20px;
    margin-top:5px;
    margin-bottom: 50px;
    height: 35px;
    width: 35px;
    
    border-radius: 50%;
    border:none;

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

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [input,setInput]=useState('');
    const [todoItems,setTodoItems]=useRecoilState(todoListState);

    const onToggle = () => setOpen(!open);

    const addItem=()=>{
        if(input!==''){
            setTodoItems(() =>[
                ...todoItems,
                    {
                        id: getId(),
                        text: input,
                        done: false
                    }
                ]
            )
            setInput('')
        }
    }

    const onChange=(e)=>{setInput(e.target.value)};

    

    return (
    <>
        {open && (
            <InsertFormPositioner>
                <InsertAllForm onClick={console.log('나다')}>
                    <InsertForm>
                        <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" value={input} onChange={onChange}/>
                    
                    </InsertForm>
                    <InsertButton type="button" onClick={addItem}>+</InsertButton>
                </InsertAllForm>
                
            </InsertFormPositioner>
        )}
        <CircleButton onClick={onToggle} open={open}>
            <MdAdd />
        </CircleButton>
    </>
    );
}

export default TodoCreate;