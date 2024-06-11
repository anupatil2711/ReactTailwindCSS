import bus from "../assets/bus.png"
import brush from "../assets/brush.png"
import percent from "../assets/percent.png"
import flag from "../assets/flag.png"
import earth from "../assets/earth.png"

const Additional = () => {
    return ( 
        <div className="mt-10 ml-5 grid md:grid-cols-5 gap-4 justify-between items-center mr-5 pb-6">
            <div className="flex ">
                <img className="w-9 h-9 mt-3" src={flag}></img>
                <div className="flex flex-col">
                <span className="ml-5 font-semibold text-xl">The Best of British</span>
                <span className="ml-5 text-neutral-500">Designed & Produced in <br />England</span>
                </div>
            </div>
            <div className="flex ">
                <img className="w-9 h-9 mt-3" src={earth}></img>
                <div className="flex flex-col">
                <span className="ml-5 font-semibold text-xl">Sustainable</span>
                <span className="ml-5 text-neutral-500">From Sustainable <br />Forests</span>
                </div>
            </div>
            <div className="flex ">
                <img className="w-9 h-9 mt-3" src={percent}></img>
                <div className="flex flex-col">
                <span className="ml-5 font-semibold text-xl">Bulk Discounts</span>
                <span className="ml-5 text-neutral-500">Buy More, Save More</span>
                </div>
            </div>
            <div className="flex ">
                <img className="w-9 h-9 mt-3" src={bus}></img>
                <div className="flex flex-col">
                <span className="ml-5 font-semibold text-xl">Free Delivery</span>
                <span className="ml-5 text-neutral-500">On every order <br />over £250.</span>
                </div>
            </div>
            <div className="flex">
                <img className="w-9 h-9 mt-3" src={brush}></img>
                <div className="flex flex-col">
                <span className="ml-5 font-semibold text-xl">Personalisable</span>
                <span className="ml-5 text-neutral-500">Personalise a <br />Chair Online</span>
                </div>
            </div>
        </div>
    )
}

export default Additional