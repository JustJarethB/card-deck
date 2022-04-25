import './App.css';
import { useDispatch } from 'react-redux';
import { shuffleDeck, sortDeck } from './reducers/deck';
import { Deck, Hand } from './components';
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(shuffleDeck())}>Shuffle</button>
        <button onClick={() => dispatch(sortDeck('INIT'))}>Sort New Deck Order</button>
      </div>
      <div>
        <Deck className="w-full" />
        <Hand />
      </div>
    </div>
  );
}

export default App;
