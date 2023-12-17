import React from 'react'

const ListComponent = () => {
  return (
    <div className="bg-secondary mt-1 flex flex-row justify-center p-1 md:justify-start 
    max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl w-full mx-auto
    ">
        <button className="btn btn-primary rounded-none text-white"> Barbati </button>
        <button className="btn btn-primary rounded-none text-white"> Femei </button>
        <button className="btn btn-primary rounded-none text-white"> Copii </button>
        <button className="btn btn-primary rounded-none text-white"> Casa </button>
        <button className="btn btn-primary rounded-none text-white"> Divertisment </button>
    </div>
  )
}

export default ListComponent