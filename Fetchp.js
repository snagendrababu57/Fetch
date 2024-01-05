import React, { useEffect, useState } from "react";
import useSWR from "swr";


const Fetcha =()=>{
  

  const[data,setData]=useState([])
 
  const fetchData=()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>{
      return res.json();
    })
    .then(users=>{
      setData(users)
    })
  }
  useEffect(()=>{
    fetchData();
  },[])
  return(
    <div>
      {data.length > 0 &&(
        <ul>{data.map(users=>(
          <li key={users.id}>{users.price}</li>
        ))}</ul>
      )}
    </div>
  )
}
export default Fetcha;