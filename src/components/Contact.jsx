import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const shashank= useNavigate();
    function clickHandler(){
        // move to support page
        shashank("/support");
    }
  return (
    <div>
    <p>this is contact page</p>
    <br/>
    <button onClick={clickHandler}>move to support page</button>
    </div>
  )
}

export default Contact