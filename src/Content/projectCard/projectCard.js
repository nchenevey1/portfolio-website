import React, { createRef } from "react";
import "./projectCard.css";

export default function ProjectCard({ projectCardInfo }) {
  const imgRef = createRef();

  const GetSkills = ({ skills }) => {
    return skills ? skills.map((item,index) => <img className="project-icons" src={item} alt="code" key={index}></img>) : null
  };

  const proj_img = projectCardInfo.projectImage;
  const proj_gif = projectCardInfo.projectGif;

  return (
    <div className="project-card">
        <div className="image-div">
            <img crossOrigin={"anonymous"} ref={imgRef} className="project-img" src={projectCardInfo.projectImage} alt="code" 
            onMouseOver={e => (e.currentTarget.src=proj_gif)} onMouseOut={e => (e.currentTarget.src=proj_img)}/>
        </div>
        <div className="project-details">
            <h5 className="project-title">{projectCardInfo.title}</h5>
            <h5 className="project-description">{projectCardInfo.desc}</h5>
            <ul>
                <h6 className="project-skills-title">Skills</h6>
                <GetSkills skills={projectCardInfo.skills} />
            </ul>
        </div>
    </div>
  );
}