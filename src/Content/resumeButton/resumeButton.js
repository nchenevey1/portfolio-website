import React from "react";
import "./resumeButton.css";

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a className="resume-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}