import React from "react";
import ProjectData from "../assets/projectsData.json";
import ProjectCard from "./ProjectCard";

export default function Project() {
    return (
        <main className="bg-pink-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-4xl flex justify-center text-gray-500 font-bold">My Projects </h1>
                <h2 className="text-2xl text-gray-500 flex justify-center mb-12">Here is preview of some of my work below</h2>
                <section className="text-white grid grid-cols-2 gap-8 text-2xl font-bold text-center break-words">
                    {ProjectData.map((project) =>(
                        <ProjectCard  project={project} />
                    ))}
                </section>
                </section>
        </main>
    )
}