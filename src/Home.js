import React from 'react';
import{useState,useContext}from 'react';
import Profile from './Profile';
 import {stateContext} from './StateContex';
function Home() {
    const [name]=useState("react");
     const {state,dispatch}=useContext(stateContext);
     console.log('state',state);
     const update=()=>{
        dispatch();
     }
  return (
    <div>Home
    <button onClick={()=>update()}>state modify</button>
    <Profile name={name}/>
    </div>
  )
}

export default Home;
