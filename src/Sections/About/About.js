import React from "react";
import "./About.css";
import Button from "../../Content/resumeButton/resumeButton";
import { about } from "../../LandPage";

export default function About() {
    return (
      <div className="about-main" id="about">
        <div className="about-subsection">
            <div className="about-content">
              <h1 className="about-title">
                {" "}
                {about.title}
                {" "}
              </h1>
              <p className="about-title-p subTitle">{about.subTitle1}</p>
              <p className="about-title-p subTitle">{about.subTitle2}</p>
              {<div className="resume-button-container">
                <Button text="Github" href={about.resume}/>
              </div>}
            </div>
        </div>
      </div>
    );
  }