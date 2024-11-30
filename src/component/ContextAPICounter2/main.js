import { createContext, useState } from "react"
import React from 'react'
import DataInsert from "./dataInsert";
import Display from "./display";


export const store = createContext();

function Main() {
  const [data, setData] = useState([
    {brandname : "Xiomi"},
    {brandname : "sumsung"}
  ])

  console.log(data);
  return (

    <store.Provider value={[data,setData]}>
        <DataInsert />
        <Display />
    </store.Provider>
  )
}

export default Main