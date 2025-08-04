import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
    const shashank=useNavigate();
    function clickHandler(){
        // move to homepage
        shashank("/")
    }
  return (
    <div>
    <p>this is support page</p>
    <br/>
    <button onClick={clickHandler}>move to homepage</button>
    </div>
  )
}

export default Support