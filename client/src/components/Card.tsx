import Photo2 from "../assets/photo2.jpg"
const Card = () => {



  return (
    <div className="bg-secondary px-3 w-64 h-[325px] cursor-pointer rounded-lg"
    >
        <div className="flex justify-center mt-2 h-48">
            <img src={Photo2} alt="test" 
            className="w-full object-cover"
            width="200" height="100"/>
        </div>
        <div className="flex flex-row mt-3">
            <div className="flex-col text-white">
                <p className="font-bold"> 70.00 RON </p>
                <p className="text-xs mt-[-0.3rem] text-neutral"> 77.00 RON incl.</p>
                <p className="text-sm mt-2"> L / 40 / 30 </p>
                <p className="text-sm mt-[-0.2rem]"> GUCCI </p>
            </div>
            <div className="">
            </div>
        </div>
    </div>
  )
}

export default Card