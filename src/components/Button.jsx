const Button = ({ setDisplay, rating }) => {
    return (
        <button onClick={() => rating === null ? setDisplay(true) : setDisplay(prev => !prev)} className="text-preset5-bold text-grey950 w-full h-[2.813rem] px-26 rounded-[1.406rem] bg-orange500 hover:bg-white md:h-[2.813rem] md:text-preset5-semibold">SUBMIT</button>
    )
}

export default Button