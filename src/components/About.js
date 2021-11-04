import React from "react";
import myPic from "../assets/aboutme.JPG";
import Skills from "./Skills";

export default function About() {
    return (
        <main className="bg-gray-200 min-h-screen p-12">
        <div className="rounded-lg p-10 lg:pt-48 container mx-auto relative">
            <section className="rounded-lg shadow-2xl lg:flex p-20 bg-pink-100 ">
                <img src={myPic} className="rounded-lg w-50 h-50 lg:w-64 lg:h-80 mr-8" alt="Amanda"/>
                <div className="bg-pink">
                    <h1 className="text-4xl justify-center mb-4 text-gray-500">
                    About me:
                    </h1>
                    <div className="text-2xl  justify-center text-gray-500">
                     My name is Amanda and I am a passionate full stack web developer. I am a graduate of a coding Boot Camp through Washington University in St. Louis, MO. My experience with coding started off as self taught and using online learning tools such as Codecademy, from there I took the leap and signed up for the Full Stack Boot Camp to get more formal training. I've found that even though I enjoy being about to do it all my interests lie more on back end development. I also enjoy debugging code. I have worked on many projects during my time learning at WASH U and plan to continue working on and improving them. You can view my <a href="https://github.com/akays89" target="_blank" rel="noreferrer"><span className= "text-pink-300 font-bold "> Github </span></a> and check my progress!
                    </div>
                    <div>
                    <Skills />
                    </div>
                </div>
            </section>
        </div>
    </main>
        )
}