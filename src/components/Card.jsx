import RateSelector from "./RateSelector";
import Button from "./Button";
import Phath from "../assets/Path.png"


const Card = ({ rating, setRating, display, setDisplay }) => {

    return (
        <section className={`${display ? "block" : "hidden"} w-[20.438rem] h-90 bg-radial-[at_100%_100%] from-[#181E27] to-[#232A34]  p-6 rounded-[0.938rem] md:w-103 md:h-104 md:py-8 md:rounded-[1.875rem]`}>
            <div className="flex flex-col gap-6 md:gap-8">
                <div className="bg-grey900 w-10 h-10 rounded-full grid place-items-center md:w-12 md:h-12">
                    <img className="w-3.5 h-[0.813rem] md:w-[1.047rem] md:h-4" src={Phath} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-preset2-bold text-white md:text-preset1-bold">How did we do?</h1>
                    <p className="text-preset5-regular text-grey500 md:text-preset4-regular">Please let us Know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                    <div className="flex gap-4 md:gap-6">
                        <RateSelector rating={rating} setRating={setRating} />
                    </div>
                </div>

                <div>
                    <Button rating={rating} setDisplay={setDisplay} />
                </div>
            </div>

        </section>
    )
}

export default Card;