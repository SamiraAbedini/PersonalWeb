import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => {
            return (
              <li key={i} className="software-skill-inline">
                {/* Render either an image or a Font Awesome icon */}
                {skill.iconPath ? (
                  <img
                    src={skill.iconPath}
                    alt={skill.skillName}
                    className="software-skill-icon"
                    onError={(e) => {
                      e.target.src = "fallback-icon.png"; // Fallback if the image is not found
                      e.target.alt = "Icon not found";
                    }}
                  />
                ) : (
                  <i className={skill.fontAwesomeClassname}></i>
                )}
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
