import React, { useContext } from 'react'
import { AppContext } from '../App'

function Message() {
  const {gameState, setGameState, correctWord, curGuess} = useContext(AppContext);

  return (
    <div className='message'>
        <h3>{
            gameState.guessedCorrect ? 
            "You guessed the correct word. Well Done." 
            : "You lost today's challenge. "
        }</h3>
        <h2>Correct Word: {correctWord}</h2>
        {
            gameState.guessedCorrect && (<h3> You guessed in {curGuess.guessNumber} attempts.</h3>)
        }
    </div>
  )
}

export default Message