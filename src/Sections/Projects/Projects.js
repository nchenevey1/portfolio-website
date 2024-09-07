import React from "react";
import "./Projects.css";
import ProjectCard from "../../Content/projectCard/projectCard";
import { projectExperiences } from "../../LandPage";


export default function ProjectExperience() {
    return (
        <div>
            <div class="anchor" id="projects"></div>
            <div className="projects-container" id="projectExperience">
                <div>
                    <h1 className="projects-heading">Projects</h1>
                    <div className="project-cards-div">
                    {projectExperiences.project.map((card) => {
                        return (
                            <ProjectCard
                                key={card.title}
                                projectCardInfo={{
                                    projectImage: card.image,
                                    projectGif: card.gif,
                                    title: card.title,
                                    desc: card.description,
                                    skills: card.skills
                                }}
                            />
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
}