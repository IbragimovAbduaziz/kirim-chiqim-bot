import React from 'react'
import { Outlet, Link } from "react-router-dom";
export default function Nav() {
  return (
      <nav id="nav">
        <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Ombor qo'shish</Link>
          </li>
          <li>
            <Link to="/ombor">Mavjud omborlar</Link>
          </li>
        </ul>
        </div>
      </nav>
  )
}
