import React from 'react'
import { CiFacebook, CiTwitter, CiYoutube } from 'react-icons/ci'

const Footer = () => {
  return (
    <div className="bg-primary flex flex-col p-3 my-3 text-white justify-center
    max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl w-full mx-auto
    ">
    <div className="flex flex-col gap-y-6 md:gap-y-0 md:flex-row">
        <div className="flex flex-col items-center gap-3 flex-1">
            <p className="font-bold"> Despre </p>
            <p> Lorem ipsum dolor sit. </p>
            <p> Lorem ipsum dolor sit. </p>
            <p> Lorem ipsum dolor sit. </p>
            <p> Lorem ipsum dolor sit. </p>
        </div>
        <div className="flex flex-col items-center gap-3 flex-1">
            <p className="font-bold"> Inscrieri </p>
            <p> Lorem ipsum dolor sit. </p>
            <p> Lorem ipsum dolor sit. </p>
            <p> Lorem ipsum dolor sit. </p>
            <p> Lorem ipsum dolor sit. </p>
        </div>
        <div className="flex flex-col items-center gap-3 flex-1">
            <p className="font-bold"> Companie </p>
            <p> Lorem ipsum dolor sit. </p>
            <p> Lorem ipsum dolor sit. </p>
            <p> Lorem ipsum dolor sit. </p>
            <p> Lorem ipsum dolor sit. </p>
        </div>
    </div>
        <div className="flex justify-center mt-12 rounded-md gap-2 bg-neutral">
            <CiFacebook size={50} cursor="pointer" />
            <CiYoutube size={50} cursor="pointer" />
            <CiTwitter size={50} cursor="pointer"/>
        </div>
    </div>
  )
}

export default Footer