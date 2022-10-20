import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App';
import { boardDefault } from '../Words';
import './Board.css'
import Letter from './Letter';

function Board() {

  const {board} = useContext(AppContext);
  return (
    <div className='board'>
        {
            board.map((letters, i)=>{
                return(
                    <div key={i} className="row">
                        {
                            letters.map((letter, j)=>(
                                <Letter key={j} className="letter" guessNumber={i} letterIndex={j}/>
                            ))
                        }
                    </div>
                )
            }
            )
        }
    </div>
  )
}

export default Board