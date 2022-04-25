import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { draw, shuffleDeck, sortDeck } from './reducers/deck';
import { Button, Deck, Hand } from './components';
function App() {
  const hand = useSelector(state => state.hand)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div class="h-controls ">
        <div className='my-1'>
          <Button onClick={() => dispatch(draw())}>Draw</Button>
          <Button onClick={() => dispatch(shuffleDeck())}>Shuffle</Button>
          <Button onClick={() => dispatch(sortDeck('INIT'))}>Sort New Deck Order</Button>
        </div>
        <p className={`${hand.length || 'hidden'} border rounded border-yellow-600 bg-yellow-200 text-yellow-600 my-1`}> Click a card in your Hand to discard to the bottom of the deck.</p>
      </div>
      <div>
        <Deck className="w-full h-deck p-2 ml-2" />
        <Hand className="h-hand" />
      </div>
    </div>
  );
}

export default App;
