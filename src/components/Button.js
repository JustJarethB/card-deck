const Button = ({ onClick, children, ...rest }) => (
    <span className="p-1">
        <button className="px-2 py-1 hover:bg-slate-200 border border-black rounded" onClick={(onClick && typeof onClick == 'function') ? onClick : null} {...rest}>{children}</button>
    </span>
)

export default Button;