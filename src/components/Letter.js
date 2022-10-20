import React, { useEffect } from 'react'
import './Letter.css'
import {AppContext} from '../App'
import {useContext} from 'react'

function Letter({letterIndex, guessNumber}) {
  const {board, correctWord, curGuess, disabledLetters, setDisabledLetters} = useContext(AppContext);
  const letter = board[guessNumber][letterIndex];
  const correct = correctWord[letterIndex] === letter
  const almost = !correct && letter !== '' && correctWord.includes(letter)

  // On traversing to the next guess
  const letterState = curGuess.guessNumber > guessNumber && (correct ? 'correct' : almost ? 'almost':'error');

  useEffect(()=>{
    if(letter !=="" && !correct && !almost){
      setDisabledLetters((prev) => [...prev, letter]);
      console.log(disabledLetters)
    }
  },[curGuess.guessNumber])

  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter