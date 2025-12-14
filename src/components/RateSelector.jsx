const RateSelector = ({ rating, setRating }) => {


    const ratings = [1, 2, 3, 4, 5];

    return (
        ratings.map(num => {
            return <button key={num} onClick={() => setRating(num)} className={`text-preset5-bold w-10.5 h-10.5 ${rating === num ? "bg-orange500 text-grey900" : "bg-grey900 text-grey500"} rounded-full px-4 py-2  hover:bg-white hover:text-grey900 md:w-[3.188rem] md:h-[3.188rem]  md:text-preset3-bold`}>{num}</button>
        })
    )

}

export default RateSelector;