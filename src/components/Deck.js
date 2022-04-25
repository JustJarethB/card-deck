import { draw } from '../reducers/deck';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './';

const Deck = ({ className }) => {
    const deck = useSelector(state => state.deck);
    const dispatch = useDispatch();
    const Cards = () => deck.map((card, i) => <div style={{ top: 0, left: i * 15 }} className='absolute h-full max-h-full' > <Card {...card} onClick={() => dispatch(draw())} /></div>);
    return (
        <div className={className}>
            <div className='relative min-h-card'>
                <Cards />
            </div>
        </div>
    )
}

export default Deck;