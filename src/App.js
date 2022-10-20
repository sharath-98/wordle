import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Board/>
      <Keyboard/>
    </div>
  );
}

export default App;
