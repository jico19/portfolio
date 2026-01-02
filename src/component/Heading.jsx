
const Heading = ({children, className = ''}) => {


    return (
        <h1 className={`font-black text-3xl ${className}`}>{children}</h1>
    )
}

export default Heading