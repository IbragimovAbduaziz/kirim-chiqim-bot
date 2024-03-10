import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams} from "react-router-dom";

export default function Views() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [ware,setWare]=useState([])
  let [bul,setBul]=useState(false)
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
  },[id,wareId])  
  useEffect(()=>{
    if(id==ware.user_id || id==ware.responsuble_id){
      setBul(true)
    }
  },[ware])
  return (
    <section id="view">
        <div className="container">
            <div className="blog">
              {bul?<button className='btn btn-in'>Tovar qo'shish</button>:""}
            </div>
            <div className="blog">
              <table>
                <tr>
                  <th>ID</th>
                  <th>TOVAR NOMI</th>
                  <th>TOVAR MIQDORI</th>
                  <th>TOVAR HAJMI</th>
                  {bul?<th>QO'SHISH</th>:""}
                  <th>TOVAR OLISH</th>
                  {bul?<th>TASDIQLASH</th>:""}
                  {bul?<th>TOVAR O'CHIRISH</th>:""}
                </tr>
              </table>
            </div>
        </div>
    </section>
  )
}
