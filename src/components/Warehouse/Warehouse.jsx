import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from "react-router-dom";
export default function Warehouse() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [wares,setWares]=useState("")
  function handleSubmit(event) {
    event.preventDefault();
    let params = serializeFormQuery(event.target);
    setSearchParams(params);
    useEffect(()=>{
      axios.get(`https://kirim-chiqim-ombor.uz/${searchParams}`)
      .then((data=>{
          setWares(JSON.stringify(date))
      }))
      .catch(err=>{
        console.log(err);
      })
    })
  }
  return (
    <section id="warehouse">
      <div className="container">
        
      </div>
    </section>
  )
}
