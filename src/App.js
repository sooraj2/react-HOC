import React,{useState, useEffect} from "react";
import "./style.css";


//import Component from "./Component";

export default function App() {
  
  const Now = x(Component);
  const [names, setNames]= useState([]);

useEffect(()=>{
fetch('https://randomuser.me/api?results=10').
  then((res)=> res.json()).
  then((json)=> json.results).
  then((data)=> data.map((user)=>user.name.first)).
  then((aakhri)=> setNames(aakhri))
},[]);
  


  return (
    <div>
      <Now />
      <ul>
        {names.map((name)=>(<li>
        {name}
        </li>))}
      </ul>

    </div>
  );
}

const x = (Component) => {
  return () => {
    return (
      <div style={{ border: "1px solid" }}>
        <Component />
      </div>
    );
  };
};

function Component() {
  return <h1>Hello StackBlitz!</h1>;
}
