import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Nav from './components/Nav';
import {createContext, useState} from 'react'
import { boardDefault } from './Words';

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);
  const [curGuess, setCurGuess] = useState({
    guessNumber:0,
    index:0
  });

  const onSelectLetter = (value) => {
        if(curGuess.index > 4 || curGuess.guessNumber > 5)
        return;
        const curBoard = [...board];
        curBoard[curGuess.guessNumber][curGuess.index] = value;
        setBoard(curBoard);
        setCurGuess({
            ...curGuess,
            index: curGuess.index + 1
        });
  }

  const onEnterKey = () => {
    //Base condition---check if all the letters are typed in
        if(curGuess.index != 5)
            return;
        if(curGuess.guessNumber > 5)
            return;
        setCurGuess({
            guessNumber: curGuess.guessNumber + 1,
            index: 0
        }); 
  }

  const onBackPress = () => {
        if(curGuess.index == 0)
            return;
        const curBoard = [...board];
        curBoard[curGuess.guessNumber][curGuess.index - 1] = "";
        setBoard(curBoard);
        setCurGuess({
            ...curGuess,
            index: curGuess.index - 1
        });
  }

  return (
    <div className="App">
      <Nav/>
      <AppContext.Provider value={{board, setBoard, curGuess, setCurGuess, onSelectLetter, 
      onBackPress, onEnterKey}}>
        <Board/>
        <Keyboard/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
