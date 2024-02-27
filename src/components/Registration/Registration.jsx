import React from 'react'

export default function Registration() {
  return (
   <section id="sing-in">
     <div className='container flex justify-center align-center'>
      <div className="form-group flex direction-column">
          <h2 className='pt-sans-bold'>Korxonani ro'yxatdan o'tkazish</h2>
          <form>
              <div className="item-form">
                <input type="text" name="compony" placeholder='Korxonani nomi..'/>
                </div>
              <div className="item-form">
                <input type="number" name="stir" placeholder='INN kiriting...'/>
                </div>
              <div className="item-form">
                <input type="submit" value="Submit"/>
                </div>
          </form>
      </div>
    </div>
   </section>
  )
}
