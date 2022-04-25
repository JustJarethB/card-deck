import './App.css';
import { useDispatch } from 'react-redux';
import { shuffleDeck } from './reducers/deck';
import { Deck, Hand } from './components';
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(shuffleDeck())}>Shuffle</button>
      </div>
      <div>
        <Deck className="w-full" />
        <Hand />
      </div>
    </div>
  );
}

export default App;
