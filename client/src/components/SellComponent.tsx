const SellComponent = () => {
  return (
    <div className="flex flex-col bg-primary mt-2 p-3 text-white
    max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl w-full mx-auto
    ">
        <p className="text-2xl text-center mb-3"> Add on marketplace something </p>
        <div className="flex flex-col bg-neutral mt-2 p-4 gap-4 max-w-lg w-full rounded-md mx-auto">
          <div className="flex flex-col"> 
          <p className="text-xl ml-1 mb-2"> Name </p>
          <input className="input input-bordered text-neutral input-primary w-full h-8" placeholder="Name" type="text"/>
          </div>
          <div className="flex flex-col"> 
          <p className="text-xl ml-1 mb-2"> Price </p>
          <input className="input input-bordered text-neutral input-primary w-full h-8" placeholder="Price" type="text"/>
          </div>
          <div className="flex flex-col"> 
          <p className="text-xl ml-1 mb-2"> Description </p>
          <textarea className="h-[200px] p-3 input-bordered text-neutral input-primary w-full resize-none rounded-lg" placeholder="Description"/>
          </div>
          <div className="flex flex-col"> 
          <p className="text-xl ml-1 mb-2"> Category </p>
          <select className="select select-bordered text-neutral select-primary w-full">
            <option> Games </option>
            <option> Accounts </option>
            <option> Skins </option>
          </select>
          </div>
          <button className="btn btn-secondary rounded-lg text-white"> Add on marketplace </button>


        </div>
    </div>
    )
}

export default SellComponent