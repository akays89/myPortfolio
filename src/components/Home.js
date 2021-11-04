import React from "react"
import image from "../assets/backgroundpink.jpg"


export default function Home() {
    return (
        <main>
            <img src={image} alt="Keyboard" className="absolute object-cover w-full h-full"/>
            <section className="relative min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-4xl text-gray-500 leading-none lg:leading-snug flex justify-center font-bold ">Welcome To The Portfolio Of
                </h1>
                <h1 className="text-5xl text-gray-500 leading-none lg:leading-snug flex justify-center font-bold "> Amanda Kays
                </h1>
                <div>
                <p className="text-3xl text-gray-500 flex justify-center m-5 font-bold">
                 Full Stack Web Developer</p>
                </div>
            </section>
        </main> 
    )
}