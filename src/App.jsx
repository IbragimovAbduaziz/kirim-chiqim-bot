import './css/style.css';
import Registration from './components/Register/Register';
import Ombor from './components/Ombor/Ombor';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

const tg=window.Telegram.WebApp

function App() {
  const [warehouse,setWarehouse]=useState("")
  useEffect(()=>{
      tg.ready()
  })
  const handleWare=(e)=>{
    setWarehouse(e.target.value)
  }
  const sendWare=()=>{
    console.log("salom");
    tg.MainButton.text="Qoshish :)"
    tg.MainButton.show()
  }
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
