import React from 'react'
import './Key.css'

function Key({value, enter_back_key}) {
  return (
    <div className={`key ${enter_back_key && 'bigKey'}`}>{value}</div>
  )
}

export default Key