import React, {useEffect, useState} from 'react';
import {createGlobalStyle} from 'styled-components';
import Todo from './components/todo/Todo';
import {RecoilRoot} from 'recoil';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Header from './components/Header';
import Routine from './components/routine/Routine';
import { getAllTodos } from './controller/TodoController';
import { db, firebase } from './firebase';
import { collection, getDocs } from "firebase/firestore";
import NotFound from './components/NotFound';




const GlobalStyle=createGlobalStyle`
  body {
    background: #e9ecef;
    margin:0;
    padding: 0;
  }
`;

function App() {
  
  
  return (
    <RecoilRoot>
    <div className="App">

      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/*" element={<Todo/>}></Route>
          <Route path="/todo/*" element={<Todo/>}></Route>
          <Route path="/routine/*" element={<Routine/>}></Route>
          
        </Routes>
        
      </BrowserRouter>

    </div>
    </RecoilRoot>
  );
}

export default App;
