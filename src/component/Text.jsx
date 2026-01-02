
const Text = ({ children, variant = 'base' }) => {
    const variants = {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
    };

    return (
        <p className={`font-normal ${variants[variant]}`}>
            {children}
        </p>
    )
}

export default Text