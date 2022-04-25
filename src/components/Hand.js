import { discard } from '../reducers/deck';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './';


const Hand = ({ className }) => {
    const hand = useSelector(state => state.hand);
    const dispatch = useDispatch();
    console.log(hand)
    const Cards = () => hand.map((card, i) => <div className='h-full p-1' > <Card {...card} onClick={() => dispatch(discard(card.id))} /></div>);
    return (
        <div className={className}>
            <div className='relative min-h-card flex h-full'>
                <Cards />
            </div>
        </div>
    )
}

export default Hand;