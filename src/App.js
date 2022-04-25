import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { shuffle } from './reducers/deck';
function App() {
  const deck = useSelector(state => state.deck);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(shuffle())}>Shuffle</button>
      </div>
      <div>
        {deck.map(card => <p>{card.id}</p>)}
      </div>
    </div>
  );
}

export default App;
