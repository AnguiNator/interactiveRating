const Thanks = ({ rating, display }) => {
    return (
        <section className={`${display ? "hidden" : "block"} w-[327px] h-[360px] bg-radial-[at_100%_100%] from-[#181E27] to-[#232A34]  px-8 py-6 rounded-[0.938rem]`}>
            <div className="flex flex-col gap-6 items-center">
                <img className="w-36 h-24" src="../src/assets/Online.png" alt="" />
                <div className="h-8 flex items-center bg-grey900 px-4 rounded-[22.5px]">
                    <p className="text-orange500 text-preset5-regular">You selected {rating} out of 5</p>
                </div>
                <div className="flex flex-col text-center gap-4">
                    <h2 className="text-white text-preset2-bold">Thank you!</h2>
                    <p className="text-grey500 text-preset5-regular">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                </div>
            </div>

        </section >
    )
}

export default Thanks;