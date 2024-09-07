import React from "react";
import "./Experience.css";
import ExperienceCard from "../../Content/workCard/workCard";
import { careerExperiences } from "../../LandPage";


export default function CareerExperience() {
    if(careerExperiences.viewExperiences){
        return (
            <div>
                <div class="anchor" id="experience"></div>
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-header">Work Experience</h1>
                        <div className="experience-cards-div">
                        {careerExperiences.experience.map((card) => {
                            return (
                                <ExperienceCard
                                    key={card.company}
                                    cardInfo={{
                                        company: card.company,
                                        atText: card.atText,
                                        desc: card.desc,
                                        date: card.date,
                                        role: card.role,
                                        descBullets: card.descBullets,
                                        companyColor: card.companyColor
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
    return null;
}