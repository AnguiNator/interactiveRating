const Thanks = ({ rating, display }) => {
    return (
        <section className={`${display ? "hidden" : "block"} w-[327px] h-[360px] bg-radial-[at_100%_100%] from-[#181E27] to-[#232A34]  px-8 py-6 rounded-[0.938rem] md:w-103 md:h-104 md:py-10 md:rounded-[1.875rem]`}>
            <div className="flex flex-col gap-6 items-center md:gap-8">
                <img className="w-36 h-24 md:w-40.5 md:h-27" src="../src/assets/Online.png" alt="" />
                <div className="h-8 flex items-center bg-grey900 px-4 rounded-[1.406rem]">
                    <p className="text-orange500 text-preset5-regular md:text-preset4-regular">You selected {rating} out of 5</p>
                </div>
                <div className="flex flex-col text-center gap-4">
                    <h2 className="text-white text-preset2-bold md:text-preset1-bold">Thank you!</h2>
                    <p className="text-grey500 text-preset5-regular md:text-preset4-regular">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                </div>
            </div>

        </section >
    )
}

export default Thanks;