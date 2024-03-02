import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import house from '../../../public/house.png';
export default function Register() {
  const [searchParams, setSearchParams] = useSearchParams()
  return(
    <section id="register">
      <div className="container">
        <div className="blog">
          <form>
            <div className="form-group">
              <img src={house}/>
              <h3>Ombor yoki do'kon qo'shish!</h3>
              <input type="text" placeholder="Ombor nomini qo'shing" />
              <input type="submit" value="Qo'shish" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
