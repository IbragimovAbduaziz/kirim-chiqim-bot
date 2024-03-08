import './css/style.css';
import Addwarehouse from './components/Warehouse/Addwarehouse';
import Allwarehouse from './components/Warehouse/All';
import Warehouse from './components/Warehouse/Warehouse';
import View from './components/Warehouse/Views';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCallback, useEffect, useState } from 'react';

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
      tg.sendData(JSON.stringify(warehouse))
  },[warehouse])
    
  useEffect(()=>{
    tg.onEvent('mainButtonClicked', onSendData)
    return ()=> tg.offEvent('mainButtonClicked', onSendData)
  },[onSendData])
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="addwarehouse" element={<Addwarehouse  handleWare={handleWare} sendWare={sendWare} />} />
          <Route path="warehouse" element={<Warehouse />} />
          <Route path="addwarehouse" element={<Allwarehouse />} />
          <Route path="view" element={<View/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
