import React, { useContext } from 'react'
import { AppContext } from '../App';
import './Key.css'

function Key({value, enter_back_key}) {
  const {board, setBoard, curGuess, setCurGuess
        , onSelectLetter, onBackPress, onEnterKey} = useContext(AppContext);

  //Handle key clicks in the keyboard
  const handleKeyboardClick = () =>{
    if(value == 'ENTER'){
        onEnterKey();
    }
    else if(value == 'BACK'){
        onBackPress();
    }
    else{
        onSelectLetter(value);
    }
  }

  return (
    <div className={`key ${enter_back_key && 'bigKey'}`} onClick={handleKeyboardClick}>
        {value}
    </div>
  )
}

export default Key