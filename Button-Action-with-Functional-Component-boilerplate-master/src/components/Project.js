import React from "react";
import { useState } from "react";

function Project(props)
{
    let [name,setText]=useState("shubham")
    return <>
    <p className="abc">{name}</p>
    <button onClick={()=>{
        setText('pranav')
        // console.log(name)
    }}>Click</button>
    </>
}

export default Project