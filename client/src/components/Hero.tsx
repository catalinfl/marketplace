import svg from "../assets/addcart.svg"
import { Typewriter } from "react-simple-typewriter"

const Hero = () => {
  return (
    <div className="bg-primary flex flex-col p-3 lg:p-0 xl:flex-row
    max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl w-full mx-auto
    ">
        <div className="flex w-full flex-col pt-8 lg:pt-12 items-center gap-2">
            <div className="flex flex-col h-full">
            <p className="font-light text-center text-3xl lg:text-5xl text-white"> Cumpără sau vinde </p>            
            <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-lime-700"> 
            <span className="pl-2 text-4xl lg:text-5xl font-bold"> 
            <Typewriter 
                words={["jacheta", "pantaloni", "tricou", "absolut orice", "la naiba"]}
                cursorStyle="."
                cursor
                loop={true}
            />
            </span>            
            </p>
            </div>
            <div className="flex flex-row w-full h-full gap-6 mt-4 lg:mt-0 justify-center items-center">
                <button className="btn btn-secondary text-md lg:text-lg justify-center items-center"> Vinde un produs </button>
                <button className="btn btn-secondary text-md lg:text-lg justify-center items-center"> Cauta un produs </button>
            </div>
        </div>
        <div className="flex w-full bg-primary justify-center">
            <img className="max-w-lg md:max-w-2xl lg:max-w-3xl" src={svg} alt="name" />
        </div>
    </div>
  )
}

export default Hero