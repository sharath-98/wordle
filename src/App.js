import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Nav from './components/Nav';
import {createContext, useEffect, useState} from 'react'
import { boardDefault, generateWord } from './Words';

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);
  const [curGuess, setCurGuess] = useState({
    guessNumber:0,
    index:0
  });

  const correctWord = "RIGHT"
  const [wordSet, setWordSet] = useState(new Set());

  useEffect(()=>{
    generateWord().then((words)=>{
      setWordSet(words.wordSet)
    })
  },[])

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
        
        // get the current word
        let curWord = "";
        for(let i=0;i<5;i++)
          curWord += board[curGuess.guessNumber][i];
        
        // Check if this is a valid word
        if(wordSet.has(curWord.toLowerCase())){
          setCurGuess({
              guessNumber: curGuess.guessNumber + 1,
              index: 0
          }); 
        }
        else{
          alert("Word not in dictionary !!!")
        }

        
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
      onBackPress, onEnterKey, correctWord}}>
        <Board/>
        <Keyboard/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
