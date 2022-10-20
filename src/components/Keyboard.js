import React from 'react'
import Key from './Key';
import './Keyboard.css'

function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className='keyboard'>
      <div className="line1">
        {
          keys1.map((key,i)=>(
            <Key key={i} value={key}/>
          ))
        }
      </div>
      <div className="line2">
        {
          keys2.map((key,i)=>(
            <Key key={i} value={key}/>
          ))
        }
      </div>
      <div className="line3">
        <Key value={'ENTER'} enter_back_key={true}/>
        {
          keys3.map((key,i)=>(
            <Key key={i} value={key} enter_back_key={false}/>
          ))
        }
        <Key value={'BACK'} enter_back_key={true}/>
      </div>
    </div>
  )
}

export default Keyboard