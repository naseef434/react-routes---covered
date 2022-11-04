import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Castingdirector from './CastingDirector'

export default function Home() {
    const [role, setRole] = useState("")   
    const onchangeHandler = (event) => {
            setRole(event.target.value)
       }
  return (
    <>
    <div>Login</div>
    <input type="text" onChange={onchangeHandler} placeholder='username'></input>
    <Link to="/admin">
        <button onClick={ ()=>{ localStorage.setItem("role" , role) } }>Login</button>
    </Link> 
    </>
  )
}
