import React, { useCallback, useContext, useEffect } from 'react'
import { AppContext } from '../App';
import Key from './Key';
import './Keyboard.css'

function Keyboard() {
  const {onSelectLetter, onBackPress, onEnterKey} = useContext(AppContext);
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((e) => {
    console.log(e.key)
    if( e.key === 'Enter'){
      onEnterKey();
    }
    else if(e.key === 'Backspace'){
      onBackPress();
    }
    else{
      keys1.forEach((key)=>{
        if(key === e.key.toUpperCase())
          onSelectLetter(key);
      })
      keys2.forEach((key)=>{
        if(key === e.key.toUpperCase())
          onSelectLetter(key);
      })
      keys3.forEach((key)=>{
        if(key === e.key.toUpperCase())
          onSelectLetter(key);
      })
    }
  });

  useEffect(()=>{
    document.addEventListener("keydown", handleKeyboard);
    return() => {
      document.removeEventListener("keydown", handleKeyboard);
    }
  },[handleKeyboard]);

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
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