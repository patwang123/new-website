import React from "react";
import ExperienceCard from "./experiencecard";
import experiences from "./experiences";

const Experience = () => {
  return (
    <div id="experience" className="section">
      <h3 className="section-title">Experience</h3>
      <div style={{ padding: "1rem 0" }}>
        {experiences.map((experience, idx) => {
          const { position, company, date, descriptions } = experience;
          return (
            <ExperienceCard
              key={`${position}-${company}`}
              position={position}
              company={company}
              descriptions={descriptions}
              date={date}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Experience;
