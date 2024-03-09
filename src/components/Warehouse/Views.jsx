import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams} from "react-router-dom";

export default function Views() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [ware,setWare]=useState()
  const id = searchParams.get('id')
  const wareId=searchParams.get('ware')
  useEffect(()=>{
    axios.get(`https://kirim-chiqim-ombor.uz/ombor/${wareId}`)
    .then(data=>{
      setWare(data.data)
    })
    .catch(err=>{
      console.log("xatooo"+err);
    })
  },[wareId])
  return (
    <section id="view">
        <div className="container">
            {JSON.stringify(ware)}
        </div>
    </section>
  )
}
