import React from "react";
import "./workCard.css";

export default function ExperienceCard({ cardInfo }) {

  const GetDescBullets = ({ descBullets }) => {
    return descBullets ? descBullets.map((item,index) => <li className="subTitle experience-bullets" key={index}>{item}</li>) : null
  };

  return (
    <div className="work-card">
      <div style={{background: cardInfo.companyColor }} className="work-card-banner">
        <div className="work-card-role">
          <h5 className="work-title-text">{cardInfo.role}</h5>
        </div>
        <h5 className="company-title">{cardInfo.company}</h5>
      </div>
      <div className="work-info">
        <h5 className="work-duration">{cardInfo.date}</h5>
        <p className="subTitle job-description">{cardInfo.desc}</p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}