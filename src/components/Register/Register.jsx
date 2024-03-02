import { useCallback, useEffect, useState } from 'react';
import house from '../../../public/house.png';
const telegram=window.Telegram.WebApp

export default function Register() {
  const [name,setName]=useState("")
  const onSubmit=()=>{
      if(name!=""){
        onTelegram()
      }
  }
  useEffect(()=>{
    telegram.ready();
  })

  const onTelegram=()=>{
    telegram.MainButton.text="Qo'shish.";
    telegram.MainButton.show()
  }

  const onSendData=useCallback(()=>{
    telegram.sendData(JSON.stringify(name))
  },[name])

  useEffect(()=>{
    telegram.onEvent('mainButtonClicked',onSendData)
  },[onSendData])

  const handleName=(e)=>{
    setName(e.target.value)
  }
  return(
    <section id="register">
      <div className="container">
        <div className="blog">
          <form>
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
