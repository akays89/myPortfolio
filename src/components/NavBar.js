import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-white-300 rounded-lg">
        <div className="container mx-auto flex justify-around">
            <nav className="text-3xl">
                <NavLink to="/" exact className="inflex-flex items-center py-6 px-5 mr-4 text-gray-600 font-bold ">
                    Home
                </NavLink>
                <NavLink to="/about" className="inflex-flex items-center py-6 px-5 mr-4 text-gray-600 font-bold ">
                    About Me
                </NavLink>
                <NavLink to="/project" className="inflex-flex items-center py-6 px-5 mr-4 text-gray-600 font-bold ">
                    Projects
                </NavLink>
                <NavLink to="/contact" className="inflex-flex items-center py-6 px-5 mr-4 text-gray-600 font-bold ">
                    Contact
                </NavLink>
            </nav>
    <div>
        <SocialIcon url="https://github.com/akays89" className="mr-4" target="_blank" style={{ height: 60, width: 60}} />
        <SocialIcon url="https://www.linkedin.com/in/amanda-kays-a551bb206" className="mr-4" target="_blank" style={{ height: 60, width: 60}}/>
        <SocialIcon url="mailto:amandakays89@gmail.com" className="mr-4" target="_blank" style={{ height: 60, width: 60}}/>
        </div>
</div>
</header>
        )
}

