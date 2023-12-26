import React from 'react'

const Sign = () => {
  return (
    <div className="flex flex-col bg-primary p-2 text-white mx-auto my-3
    items-center justify-center min-h-[600px] h-full
    max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl w-full mx-auto 
    ">
        <p className="flex justify-center font-bold mb-12 text-5xl"> Login or register </p>
        <div className="flex flex-col lg:flex-row gap-x-12 justify-center">
            <div className="flex flex-col bg-neutral p-6 w-96 rounded-md">
                    <p className="text-center font-bold mb-2 text-xl"> Sign-up </p>
                    <div className="flex flex-col gap-6 mx-auto p-4">
                        <input type="text" placeholder="Name" className="input input-bordered text-neutral input-primary" />
                        <input type="text" placeholder="Password" className="input input-bordered text-neutral input-primary" />
                        <input type="text" placeholder="Confirm password" className="input input-bordered text-neutral input-primary" />
                        <button className="btn btn-primary text-white"> Login </button>
                    </div> 
            </div>
            <div className="flex flex-col bg-neutral p-6 w-96 rounded-md">
                <p className="text-center font-bold mb-2 text-xl"> Sign-up </p>
                <div className="flex flex-col gap-6 mx-auto p-4">
                    <input type="text" placeholder="Name" className="input input-bordered text-neutral input-primary" />
                    <input type="text" placeholder="Password" className="input input-bordered text-neutral input-primary" />
                    <input type="text" placeholder="Confirm password" className="input input-bordered text-neutral input-primary" />
                    <button className="btn btn-primary text-white"> Register </button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Sign