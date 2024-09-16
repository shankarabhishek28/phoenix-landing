import Image from 'next/image'
import React from 'react'

const Herosection = () => {
    return (
        <>
            <div className="relative flex align-center justify-center w-full h-[400px]">
                <Image
                    src="/images/mountains.webp"
                    alt="Description of the image"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-primary via-transparent"></div>

                <nav className="absolute top-0 left-0 w-full bg-opacity-50 bg-black text-white">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <div className="text-xl font-bold">Logo</div>
                        <ul className="flex space-x-4">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div></>


    )
}

export default Herosection