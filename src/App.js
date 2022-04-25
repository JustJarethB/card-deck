import './App.css';
import { useDispatch } from 'react-redux';
import { shuffle } from './reducers/deck';
import { Deck } from './components';
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(shuffle())}>Shuffle</button>
      </div>
      <div>
        <Deck className="w-1/8" />
      </div>
    </div>
  );
}

export default App;
