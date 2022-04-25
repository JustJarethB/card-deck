import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { shuffle } from './reducers/deck';
import { Card } from './components';
function App() {
  const deck = useSelector(state => state.deck);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(shuffle())}>Shuffle</button>
      </div>
      <div>
        {deck.map(card => <Card {...card} />)}
      </div>
    </div>
  );
}

export default App;
