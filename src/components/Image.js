//stolen, cred https://stackoverflow.com/questions/53775936/import-image-dynamically-in-react-component
import { useImage } from '../helpers'

const Image = ({ path, alt, className, ...rest }) => {
    const { loading, error, image } = useImage(path)

    if (error) return <p>{alt}</p>

    return (
        <>
            {loading ? (
                <p>loading</p>
            ) : (
                <img
                    className={`Image${className
                        ? className.padStart(className.length + 1)
                        : ''
                        }`}
                    src={image}
                    alt={alt}
                    {...rest}
                />
            )}
        </>
    )
}

export default Image