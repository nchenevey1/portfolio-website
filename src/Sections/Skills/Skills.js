import React from "react";
import "./Skills.css";
import CourseCard from "../../Content/courseCard/courseCard";
import { coursesSection } from "../../LandPage";

export default function Skills() {
  return (
    <div className="skills-main">
        <div class="anchor" id="skills"></div>
        <div className="skills-text-div">
          <h1 className="skills-heading">{coursesSection.title} </h1>
          <p className="skills-text-subtitle">{coursesSection.coursesSubTitle}</p>
        </div>
        <div className="skills-list-div">
            {coursesSection.skillsList.map((card) => {
                        return (
                            <CourseCard
                                key={card.courseID}
                                courseInfo={{
                                    id: card.courseID,
                                    title: card.courseTitle,
                                    description: card.courseDescription,
                                    color: card.courseColor,
                                }}
                            />
                        );
                    })}
        </div>
    </div>
  );
}