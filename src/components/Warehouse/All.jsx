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
    const asdf=wares.filter(item=>item.name.toUpperCase().includes(val))
    setChangeWare(asdf)
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
              <div className="blog">
                {changeWare?changeWare.map(sd=><button className='btn' key={sd._id}>{sd.name}</button>):""}
              </div>
        </div>
      </div>
    </section>
  )
}
