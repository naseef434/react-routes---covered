import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './details.css'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

export default function Details() {

const location = useLocation()
const state = location.state || {}
const {userId} = useParams()
const [user, setuser] = useState(state.data)


const navigate = useNavigate()


useEffect(() => {
  if(!user){

    fetchApi();
  }
}, [userId,user]);

const fetchApi = async () => {
  const results = await axios.get(
    "https://jsonplaceholder.typicode.com/users/"+userId
  );
  setuser(results?.data);
};

// console.log(data);
    return (
    <div className='page'>
       <div className="title">
            {user?.name}
       </div>
       <div className="body">
            {user?.username}
       </div>
       <div className="body">
            {user?.email}
        </div>
        <div className="body">
        
        </div>
        <button onClick={()=>{navigate(-1)}}>go back</button>
    </div>
  )
}
