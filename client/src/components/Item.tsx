import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react';
import Image from "../assets/photo.jpg"
import Image2 from '../assets/photo2.jpg'
import { CiStar } from "react-icons/ci"



const Item = () => {

    const [toggle, setToggle] = useState<boolean>(false)

  return (
        <div className="max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl w-full mx-auto
        flex flex-col gap-4 p-4 lg:p-0 bg-primary mt-2
        ">
            <div className="text-white text-3xl ml-3 mt-3">
                <p> Title item </p>

            </div>
            <div className="flex flex-col lg:flex-row"> 
                <div className="flex flex-col flex-1 p-2 justify-center items-center">
                    <img className="cursor-pointer w-[500px] h-[500px] object-fit" src={Image} onClick={() => setToggle(!toggle)} />
                        <FsLightbox
                            toggler={toggle}
                            sources={[
                                Image,
                                Image2
                            ]}
                            />
                    <p className="font-bold text-white cursor-pointer" onClick={() => setToggle(!toggle)}> 1/2 (2 photos) </p>
                </div>
                <div className="flex-col flex-1 gap-4">
                    <div className="flex flex-col">
                        <p className="text-white font-bold text-2xl"> Lorem, ipsum dolor. </p>
                        <p className="text-white font-thin"> Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsa quod, sed placeat illum qui perferendis fugit laborum ut magnam! </p>
                        <p className="text-white font-thin"> Category: Games </p>
                    </div>
                    <div className="">
                        <h2 className="text-7xl font-bold text-neutral justify-center items-center flex mt-3"> 300 lei </h2>
                    </div>
                    <div className="flex flex-col mt-12 bg-neutral w-64 mx-auto justify-center items-center rounded-md p-2">
                        <img src={Image} className="flex w-32 h-32 object-cover justify-center items-center"  />
                        <p className="text-primary"> Seller: Test64 </p>
                        <p className="text-primary flex items-center"> Rating: 9.7/10 (35 ratings) <CiStar className="ml-1 text-xl text-primary rounded-lg bg-yellow-500" /> </p>
                        <p className="text-primary"> Date published: 12.12.2021 </p>
                    </div>
                    <div className="flex gap-5 w-full justify-center my-6">
                        <button className="btn btn-neutral w-32"> Contact </button>
                        <button className="btn btn-neutral w-48"> Add to favorite </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Item