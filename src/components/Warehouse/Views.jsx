import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams,Link} from "react-router-dom";

export default function Views() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [ware,setWare]=useState([])
  let [bul,setBul]=useState(false)
  let [product,setProduct]=useState("")
  let [products,setProducts]=useState([])
  let [chek,setChek]=useState("")
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

  const handValue=(e)=>{
    setProduct(e.target.value.toUpperCase())
  }

  const sendValue=()=>{
    axios.post(`https://kirim-chiqim-ombor.uz/ombor/`,{ware_id:wareId,name:product})
    .then(data=>{
      setChek(data.data.message)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    axios.get(`https://kirim-chiqim-ombor.uz/products/${wareId}`)
    .then(res=>{
      setProducts(res.data)
      setProduct("")
      fun()
    })
  },[chek])
  function fun(){
    setTimeout(()=>{
      setChek("")
    },1000)
  }
  return (
    <section id="view">
        <div className="container">
            <div className="blog">
              <input 
              type="text"
              placeholder="......."
              onChange={handValue}
              className='txt-in'
              value={product}
              />
              <button className='btn btn-in' onClick={sendValue}>Yangi tovar qo'shish</button>
              <p className='chek'>{chek}</p>
            </div>
            <div className="blog">
              <table>
                <tr>
                  <th>ID</th>
                  <th>NOMI</th>
                  <th>MIQDORI</th>
                  <th>HAJMI</th>
                  <th>QO'SHISH</th>
                  <th>OLISH</th>
                </tr>
                {products.map((item,i)=><tr key={item._id}>
                  <td>{i+1}</td>
                  <td>{item.name}</td>
                  <td>{item.count}</td>
                  <td>{item.volume}</td>
                  <td><button>Qoshish</button></td>
                  <td><button>Olish</button></td>
                </tr>)}
              </table>
            </div>
        </div>
    </section>
  )
}
