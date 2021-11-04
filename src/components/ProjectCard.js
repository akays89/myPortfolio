import React from "react";

export default function ProjectCard({ project }) {
  const { title, github, deploylink, summary, image, technologies } = project;

  return (
    <article className="relative rounded-lg shadow-xl p-16 bg-gray-200">
      <h3 className=" text-3xl m-4 text-gray-500">{title}</h3>
      <div className="text-center text-gray-500">
        <img src={image} className="rounded-lg" alt=""/>
        <p className="m-5">About: {summary}</p>
        <a href={github} target="_blank" rel="noreferrer" ><span className= "text-pink-300 m-5">Github Link</span></a>
        <a href={deploylink} target="_blank" rel="noreferrer" ><span className="text-pink-300 m-5">Deployed Link</span></a>
        <p className="m-8">Built with: {technologies}</p>
      </div>
    </article>
  );
}