import React from "react";
import "./Header.css";
import {careerExperiences} from "../../LandPage";

function Header() {
    const exp = careerExperiences.viewExperiences;
    return (
        <header className="header">
            <input className="b-button" type="checkbox" id="b-button"/>
            <label className="burger" htmlFor="b-button">
                <span className="bar"></span>
            </label>
            <ul className="nav-menu">
                <li>
                    <a href="#about" onClick={toggleCheckbox}>About</a>
                </li>
                { exp === true && 
                    <li>
                        <a href="#experience" onClick={toggleCheckbox}>Work Experience</a>
                    </li>
                }
                <li>
                    <a href="#projects" onClick={toggleCheckbox}>Projects</a>
                </li>
                <li>
                    <a href="#skills" onClick={toggleCheckbox}>Academics</a>
                </li>
                <li>
                    <a href="#contact" onClick={toggleCheckbox}>Contact</a>
                </li>
            </ul>
        </header>
    )
}

function toggleCheckbox()
{
    document.getElementById("b-button").checked = !document.getElementById("b-button").checked;
}

export default Header;