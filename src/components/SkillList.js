import React from "react";

const SkillList = React.memo(({ skills, onDelete }) => {
    console.log('sdfs',skills, onDelete)
  return (
    <ul>
      {skills.map((skill, idx) => (
        <li
          key={idx}
          id={`skill-number-${idx}`}
          onClick={() => onDelete(skill)}
          style={{ cursor: "pointer" }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

export default SkillList;
