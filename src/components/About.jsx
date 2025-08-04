import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate=useNavigate();
    function clickHandler(){
        // move to contact page
        navigate("/contact");
    }

  return (
    <div>
    <p>this is about page</p>
    <br/>
    <button onClick={clickHandler}>move to contact page</button>
    </div>
  )
}

export default About