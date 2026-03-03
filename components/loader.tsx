import React from 'react'
import load from "../public/loading.gif"
const loader = () => {
  return (
    <div>loader
        <img src={load} alt="Loading..." />
    </div>
  )
}

export default loader
