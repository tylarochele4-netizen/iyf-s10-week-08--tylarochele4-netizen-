function Button({ 
    text = "Click me", 
    variant = "primary", 
    size = "medium", 
    disabled = false 
}) {
    return (
        <button 
            className={`btn btn-${variant} btn-${size}`}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;
