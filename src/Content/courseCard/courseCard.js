import React from "react";
import "./courseCard.css";

export default function CourseCard({ courseInfo }) {


  return (
    <div className="course-card">
      <div style={{background: courseInfo.color }} className="course-card-banner">
        <div className="course-card-role">
          <h5 className="course-title-text">{courseInfo.title}</h5>
        </div>
      </div>
      <div className="course-info">
        <p className="subTitle job-description">{courseInfo.description}</p>
      </div>
    </div>
  );
}