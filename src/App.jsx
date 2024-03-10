import './css/style.css';
import Addwarehouse from './components/Warehouse/Addwarehouse';
import Allwarehouse from './components/Warehouse/All';
import Warehouse from './components/Warehouse/Warehouse';
import View from './components/Warehouse/Views';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const tg=window.Telegram.WebApp

function App() {
  const [warehouse,setWarehouse]=useState({name:""})
  const [err,setErr]=useState("")
  useEffect(()=>{
      tg.ready()
  })
  const handleWare=(e)=>{
      setWarehouse({name:e.target.value})
  }
  const sendWare=()=>{    
    if(warehouse!=""){
      tg.MainButton.text="Qoshish :)"
      tg.MainButton.show()
    }
  }

  const onSendData = useCallback(()=>{
    axios.get(`https://kirim-chiqim-ombor.uz/warehouses/${warehouse}`)
    .then(res=>{  
        if(res.data.length>0){
          return setErr("Bunday obekt mavjud!")
        }
        tg.sendData(JSON.stringify(warehouse))
    })
    .catch(err=>{
      console.log(err);
    })
  },[warehouse])
    
  useEffect(()=>{
    tg.onEvent('mainButtonClicked', onSendData)
    return ()=> tg.offEvent('mainButtonClicked', onSendData)
  },[onSendData])
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="addwarehouse" element={<Addwarehouse  err={err} handleWare={handleWare} sendWare={sendWare} />} />
          <Route path="warehouse" element={<Warehouse />} />
          <Route path="addwarehouse" element={<Allwarehouse />} />
          <Route path="view" element={<View/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
