import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams, Link } from "react-router-dom";
export default function Warehouse() {
  console.log("salom");
  let [searchParams, setSearchParams] = useSearchParams();
  let [wares,setWares]=useState([])
  const id = searchParams.get('id')
    useEffect(()=>{
      axios.get(`https://kirim-chiqim-ombor.uz/${id}`)
      .then(data=>{        
          setWares(data.data)
      })
      .catch(err=>{
        console.log("xatooooooo"+err);
      })},[])
  return (
    <section id="warehouse">
      <div className="container">
        <h2>salom</h2>
      {wares.map(ware=> (
        <Link to={`/view?id=${id}&ware=${ware._id}`} key={ware._id} >
          <button className='btn'>
            {ware.name}
          </button>
        </Link>
      ))}
      </div>
    </section>
  )
}
