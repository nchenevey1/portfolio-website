import React, { Component } from "react";
import Header from "./Header/Header";
import About from "../Sections/About/About";
import CareerExperience from "../Sections/Experience/Experience";
import ProjectExperience from "../Sections/Projects/Projects";
import Skills from "../Sections/Skills/Skills";
import Contact from "../Sections/Contact/Contact";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <CareerExperience />
                <Skills />
                <ProjectExperience />
                <Contact />
            </div>
        );
    }
}