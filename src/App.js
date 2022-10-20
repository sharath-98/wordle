import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Nav from './components/Nav';
import {createContext, useState} from 'react'
import { boardDefault } from './Words';

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <Nav/>
      <AppContext.Provider value={{board, setBoard}}>
        <Board/>
        <Keyboard/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
