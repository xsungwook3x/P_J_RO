import React, {useState} from 'react';
import {createGlobalStyle} from 'styled-components';
import Todo from './components/todo/Todo';
import {RecoilRoot} from 'recoil';


const GlobalStyle=createGlobalStyle`
  body {
    background: #e9ecef;
    margin:0;
    padding: 0;
  }
`;

function App() {
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 하기',
      checked: true,
    },
    {
      id: 3,
      text: '투두리스트 만들기',
      checked: false,
    },
  ]);

  return (
    <RecoilRoot>
    <div className="App">
      <GlobalStyle/>
      <Todo/>

    </div>
    </RecoilRoot>
  );
}

export default App;
