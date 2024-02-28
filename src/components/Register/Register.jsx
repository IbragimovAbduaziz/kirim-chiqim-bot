import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function Register() {
  const [searchParams, setSearchParams] = useSearchParams()
  return (
   <section id="sing-in">
     <div className='container flex justify-center align-center'>
      <div className="form-group flex direction-column">
          <h2><div>Tutorial: {searchParams.get('id')}</div></h2>
          <h2 className='pt-sans-bold'>Ombor yoki do'kon qo'shish.</h2>
          <form>
              <div className="item-form">
                <input type="text" name="name" placeholder='Omborga nom bering ixtiyori..'/>
              </div>
              <div className="item-form">
                <input type="submit" value="Qo'shish"/>
                </div>
          </form>
      </div>
    </div>
   </section>
  )
}
