import './css/style.css';
import Registration from './components/Register/Register';
import Ombor from './components/Ombor/Ombor';
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
    setErr(warehouse.name)
  }
  const sendWare=()=>{
    if(warehouse!=""){
      tg.MainButton.text="Qoshish :)"
      tg.MainButton.show()
    }
  }

  const onSendData = useCallback(()=>{
      tg.sendData(JSON.stringify(["salom"]))
      setErr("okkkkkkkk")
  },[])
    
  useEffect(()=>{
    tg.MainButton.onClick(onSendData)
    return ()=> tg.MainButton.onClick(onSendData)
  },[onSendData])
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="register" element={<Registration err={err} handleWare={handleWare} sendWare={sendWare} />} />
          <Route path="ombor" element={<Ombor />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
