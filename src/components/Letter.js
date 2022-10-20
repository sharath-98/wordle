import React from 'react'
import './Letter.css'
import {AppContext} from '../App'
import {useContext} from 'react'

function Letter({letterIndex, guessNumber}) {
  const {board} = useContext(AppContext);
  const letter = board[guessNumber][letterIndex];
  return (
    <div className='letter'>{''}</div>
  )
}

export default Letter