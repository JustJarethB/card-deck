import { Image } from '.'
const Card = props => {
    const { id } = props;
    let src = `card-fronts/${id}.png`;
    console.log(src);
    return (
        <div id={id}>
            <Image path={src} />
        </div>
    )
}

export default Card;