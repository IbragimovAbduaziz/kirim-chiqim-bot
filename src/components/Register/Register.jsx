import { useCallback, useEffect, useState } from 'react';
import house from '../../../public/house.png';
const telegram=window.Telegram.WebApp

export default function Register() {
  const [name,setName]=useState("")
  useEffect(()=>{
    telegram.ready();
  })

  const onTelegram=()=>{
    if(name!=""){
      telegram.MainButton.text="Qo'shish.";
      telegram.MainButton.show()
    }
  }

  const onSendData=useCallback(()=>{
    telegram.sendData(JSON.stringify(name))
  },[name])

  useEffect(()=>{
    telegram.onEvent('mainButtonClicked', onSendData);
    console.log("salom");
    return ()=>telegram.offEvent('mainButtonClicked',onSendData);
  },[onSendData])

  const handleName=(e)=>{
    console.log(e.target.value);
    setName(e.target.value)
  }


  return(
    <section id="register">
      <div className="container">
        <div className="blog">
            <div className="form-group">
              <img src={house}/>
              <h3>Ombor yoki do'kon qo'shish!</h3>
              <input type="text" placeholder="Ombor nomini qo'shing" onChange={handleName}/>
              <input type="button" value="Qo'shish" onClick={onTelegram}/>
            </div>
        </div>
      </div>
    </section>
  )
}
