import React from "react";
import "./Contact.css";
import { contactMe } from "../../LandPage";

export default function Contact() {
  return (
    <div className="contact-main" id="contact">
        <div className="contact-text-div">
            <h1 className="contact-header">{contactMe.title} </h1>
            <div className="email-div">
                <a className="contact-email" href="mailto:nicholaschenevey1@gmail.com">{contactMe.email}</a>
            </div>
        </div>
        <div className="disclaimer-text">Disclaimer: The company names and logos displayed above are trademarked to their respective owners. The display of them in no way indicates any endorsement or sponsorship.</div>
    </div>
  );
}