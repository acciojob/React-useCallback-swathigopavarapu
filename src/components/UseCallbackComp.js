import React, { useState, useCallback } from "react";
import SkillList from "./SkillList";


const UseCallbackComp = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [input, setInput] = useState("");

 
  const addSkill = useCallback(() => {
    const newSkill = input.trim();
    if (newSkill && !skills.includes(newSkill)) {
      setSkills((prevSkills) => [...prevSkills, newSkill]);
    }
    setInput("");
  }, [input, skills]);
  const deleteSkill = useCallback((skill) => {
    setSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
  }, []);

  return (
    <div>
      <h1 id="heading">Skill Manager with useCallback</h1>
      <input
        id="skill-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a skill"
      />
      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} onDelete={deleteSkill} />
    </div>
  );
};

export default UseCallbackComp;
