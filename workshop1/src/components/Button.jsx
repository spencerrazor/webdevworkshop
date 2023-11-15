import '../styles/Button.css'

function Button({name, handleClick}) {

    return (
        <button onClick={handleClick}>{name}</button>
    )
}

export default Button