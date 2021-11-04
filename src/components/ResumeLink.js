import React from "react"
import Resume from "../assets/Amanda Kays Resume.docx (2).pdf"

export default function ResumeBtn() {
    return(
        <p className="text-gray-500 font-bold text-center text-3xl">Click <span className= "text-pink-400 font-bold "><a href={Resume} target="_blank" rel="noopener noreferrer"> here</a></span> to view my resume</p>
    )
}