import { useCallback, useEffect, useState } from 'react';
import house from '../../../public/house.png';
const telegram=window.Telegram.WebApp

export default function Register() {
  const [name,setName]=useState("")
  useEffect(()=>{
    telegram.ready();
  })

  const result=()=>{
    console.log(name);
    if(name!=""){
      onTelegram
    }
  }

  const onTelegram=()=>{
    console.log("salom");
    telegram.MainButton.text="Qo'shish.";
    telegram.MainButton.show()
  }

  const onSendData=useCallback(()=>{
    telegram.sendData(name)
  },[name])

  useEffect(()=>{
    telegram.onEvent('mainButtonClicked',onSendData)

    return ()=>telegram.offEvent('mainButtonClicked',onSendData)
  },[onSendData])

  const handleName=(e)=>{
    setName(e.target.value)
  }


  return(
    <section id="register">
      <div className="container">
        <div className="blog">
          <form onSubmit={result}>
            <div className="form-group">
              <img src={house}/>
              <h3>Ombor yoki do'kon qo'shish!</h3>
              <input type="text" placeholder="Ombor nomini qo'shing" onChange={handleName}/>
              <input type="submit" value="Qo'shish" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
