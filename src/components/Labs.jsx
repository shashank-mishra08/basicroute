import React from 'react'
import { useNavigate } from 'react-router-dom'


const Labs = () => {
    const navigate=useNavigate();
    function clickHandler(){
        navigate("/about");
    }
    function backHandler(){
        navigate(-1);
    }
  return (
    <div>
    <p>Labs</p>
    <br/>
    <button onClick={clickHandler}>move to about page</button>
    <button onClick={backHandler}>go back</button>
    </div>
  )
}

export default Labs