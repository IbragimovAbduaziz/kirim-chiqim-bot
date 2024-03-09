import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams} from "react-router-dom";

export default function Views() {
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id')
  const wareId=searchParams.get('ware')
  return (
    <section id="view">
        <div className="container">
            <h2>{id}</h2>
            <h3>{wareId}</h3>
        </div>
    </section>
  )
}
