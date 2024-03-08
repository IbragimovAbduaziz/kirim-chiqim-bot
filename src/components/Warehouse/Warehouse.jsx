import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams,Outlet, Link } from "react-router-dom";
export default function Warehouse() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [wares,setWares]=useState([])
  const id = searchParams.get('id')
  console.log(searchParams);
    useEffect(()=>{
      axios.get(`https://kirim-chiqim-ombor.uz/${id}`)
      //axios.get(`http://localhost:5757/${id}`)
      .then(data=>{
          setWares(data.data)
      })
      .catch(err=>{
        console.log("xatooooooo"+err);
      })},[searchParams])
  return (
    <section id="warehouse">
      <div className="container">
      {wares.map(ware=> (
        <Link to={`/view?id=${ware._id}`}>
          <button key={ware._id}>
            {ware.name}
          </button>
        </Link>
      ))}
      </div>
    </section>
  )
}
