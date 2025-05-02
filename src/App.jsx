import React,{useEffect, useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {

const [count,setCount]=useState(0);

const handleStorage=()=>{
  let oldCount=JSON.parse(localStorage.getItem('count'));
  setCount(oldCount);
}  

const handleIncrement=()=>{
  let newCount=count+1;
  localStorage.setItem('count',JSON.stringify(newCount));
  setCount(newCount);
}

const  handleDecrement=()=>{
  let Count=count-1;
  if(Count<0)return
  localStorage.setItem('count',JSON.stringify(Count));
  setCount(Count);
}

const handleReset = ()=>{
  let resetCount = 0;
  localStorage.setItem("count",JSON.stringify(resetCount))
  setCount(resetCount);
}

useEffect(()=>{
  handleStorage();
},[]);

  return (
    <>
       <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#8AEDB1' }}>
      <div className="text-center">
        <h1 className="mb-4">Counter App</h1>
        <h2 className="fs-1">{count}</h2>
        <div className="btn-group" role="group" aria-label="Counter controls">
          <button className="btn btn-danger fs-4" onClick={handleDecrement}>-</button>
          <button className="btn btn-light fs-5" onClick={handleReset}>Reset</button>
          <button className="btn btn-success fs-4" onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
