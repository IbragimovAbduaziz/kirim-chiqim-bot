import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function All() {
  let [wares,setWares]=useState([])
  let [changeWare,setChangeWare]=useState()
  useEffect(()=>{
    axios.get(`https://kirim-chiqim-ombor.uz/ombor/`)
    .then(data=>{
        setWares(data.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  const searchWare=(e)=>{
    const val=e.target.value.toUpperCase()
    const changeWare=wares.filter(item=>item.name==val)    
  }
  return (
    <section id="all">
      <div className="container">
        <div className="blog">
              <div className="form-input">
                <input 
                type="text" 
                placeholder='Ombor nomi orqali qidirish....' 
                onChange={searchWare}
                />
              </div>
              {JSON.stringify(changeWare)}
        </div>
      </div>
    </section>
  )
}
