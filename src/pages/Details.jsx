import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './details.css'
import { useParams } from 'react-router-dom'

export default function Details() {
const {userId} = useParams()
// console.log('useparams ' , userId);

const [data, setdata] = useState()
  
useEffect(() => {
  fetchApi()

}, [userId])

const fetchApi =  async () => {
  const results = await axios.get('https://jsonplaceholder.typicode.com/users/'+userId)
  setdata(results?.data)
}
// console.log(data);
    return (
    <div className='page'>
       <div className="title">
            {data?.name}
       </div>
       <div className="body">
            {data?.username}
       </div>
       <div className="body">
            {data?.email}
        </div>
        <div className="body">
        
        </div>
    </div>
  )
}
