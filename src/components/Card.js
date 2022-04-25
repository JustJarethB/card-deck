import { Image } from './'
const Card = props => {
    const { id, onClick } = props;
    let src = `card-fronts/${id}.png`;
    // console.log(src);
    return (
        <button onClick={(onClick && typeof onClick == 'function') ? onClick : null} id={id} className="min-h-card h-full">

            <Image path={src} className="object-contain w-full h-full" />
        </button>
    )
}

export default Card;