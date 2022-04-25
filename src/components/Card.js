import { Image } from './'
const Card = props => {
    const { id } = props;
    let src = `card-fronts/${id}.png`;
    console.log(src);
    return (
        <div id={id} className="min-h-card h-full">
            <Image path={src} className="object-contain w-full h-full" />
        </div>
    )
}

export default Card;