import React from 'react'
import { Outlet, Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/ombor">Ombor</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
    </div>
  )
}
