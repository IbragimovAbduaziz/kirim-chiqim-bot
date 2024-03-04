import './css/style.css';
import Registration from './components/Register/Register';
import Ombor from './components/Ombor/Ombor';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCallback, useEffect, useState } from 'react';

const tg=window.Telegram.WebApp

function App() {
  const [warehouse,setWarehouse]=useState("")
  const [err,setErr]=useState("")
  useEffect(()=>{
      tg.ready()
  })
  const handleWare=(e)=>{
    setWarehouse(e.target.value)
  }
  const sendWare=()=>{
    if(warehouse!=""){
      tg.MainButton.text="Qoshish :)"
      tg.MainButton.show()
    }
  }

  const onsendData = useCallback(async()=>{
      await tg.sendData(warehouse)
      tg.MainButton.hide()
  },[warehouse])

  useEffect(()=>{
    tg.onEvent('mainButtonClicked', onsendData)
    return ()=> tg.offEvent('mainButtonClicked', onsendData)
  },[onsendData])
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
