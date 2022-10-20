import React from 'react'
import './Letter.css'
import {AppContext} from '../App'
import {useContext} from 'react'

function Letter({letterIndex, guessNumber}) {
  const {board, correctWord, curGuess} = useContext(AppContext);
  const letter = board[guessNumber][letterIndex];
  const correct = correctWord[letterIndex] === letter
  const almost = !correct && letter !== '' && correctWord.includes(letter)
  const letterState = curGuess.guessNumber > guessNumber && correct ? 'correct' : almost ? 'almost':'error';

  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter