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
          <Route path="register" element={<Registration  handleWare={handleWare} sendWare={sendWare} />} />
          <Route path="ombor" element={<Ombor />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
