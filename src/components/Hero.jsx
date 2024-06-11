import cover from "../assets/cover.jpg"
import side1 from "../assets/side1.jpg"
import side2 from "../assets/side2.jpg"

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row mr-6 mt-3 gap-2">
            <img className="ml-3 rounded-xl brightness-50 h-[600px]" width={900} src={cover}></img>
            <div className="absolute inset-0 flex flex-col space-y-10 ml-24 items-start mt-[314px] justify-start">
                <h2 className="text-white text-7xl font-extrabold font-serif">Evaluate <br /><i>your</i><br />Fitness</h2>
                <button className="font-semibold text-blue-950 mt-3 rounded-full w-48 h-16 bg-lime-300">SHOP NOW →</button>
            </div>
            <div className="grid md:grid-row-2 gap-4">
                <div className=" items-start justify-content-center h-300">
                    <img className="ml-3 rounded-xl brightness-50 h-[287px]" width={490} src={side1} alt="side1" />
                </div>
                <div className=" items-start justify-content-center h-300">
                    <img className="ml-3 rounded-xl brightness-50 h-[287px]" width={490} src={side2} alt="side2" />
                </div>
            </div>
        </div>
        
    )
}

export default Hero