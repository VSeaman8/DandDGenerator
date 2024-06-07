const SkillsContainer = () => {
  const skills = [
    { name: "Acrobatics (DEX)", proficiency: 2 },
    { name: "Animal Handling (WIS)", proficiency: null },
    { name: "Arcana (INT)", proficiency: null },
    { name: "Athletics (STR)", proficiency: null },
    { name: "Deception (CHA)", proficiency: null },
    { name: "History (INT)", proficiency: null },
    { name: "Insight (WIS)", proficiency: null },
    { name: "Intimidation (CHA)", proficiency: null },
    { name: "Investigation (INT)", proficiency: null },
    { name: "Medicine (WIS)", proficiency: null },
    { name: "Nature (INT)", proficiency: null },
    { name: "Perception (WIS)", proficiency: null },
    { name: "Performance (CHA)", proficiency: null },
    { name: "Persuasion (CHA)", proficiency: 2 },
    { name: "Religion (INT)", proficiency: null },
    { name: "Slight of Hand (DEX)", proficiency: 2 },
    { name: "Stealth (DEX)", proficiency: 2 },
    { name: "Survival (WIS)", proficiency: null },
  ];
  const savingThrows = [
    { name: "Strength", proficiency: null },
    { name: "Dexterity", proficiency: 4 },
    { name: "Constitution", proficiency: null },
    { name: "Intelligence", proficiency: 3 },
    { name: "Wisdom", proficiency: null },
    { name: "Charisma", proficiency: null },
  ];

  return (
    <div className="skillsContainer">
      <div className="skillsList boxconfig">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill.name} className="skillItem">
              <span
                className={`circle ${skill.proficiency ? "filled" : ""}`}
              ></span>
              <div className="breakLineContainer">
                {skill.proficiency && (
                  <div className="proficiencyNumber">{skill.proficiency}</div>
                )}
                <hr className="breakLine" />
              </div>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="savingThrowsList boxconfig">
        <h3>Saving Throws</h3>
        <ul>
          {savingThrows.map((throwItem) => (
            <li key={throwItem.name} className="skillItem">
              <span
                className={`circle ${throwItem.proficiency ? "filled" : ""}`}
              ></span>
              <div className="breakLineContainer">
                {throwItem.proficiency && (
                  <div className="proficiencyNumber">
                    {throwItem.proficiency}
                  </div>
                )}
                <hr className="breakLine" />
              </div>
              {throwItem.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="wealthcontainer">
        <h2>Wealth</h2>
        <p>Gold 296</p>
        <p>Silver 500</p>
        <p>Copper 6,000</p>
      </div>
    </div>
  );
};

export default SkillsContainer;

/* 
return (
    <div className="skillsContainer">
      <div className="skillsList">
        <ul>
          {[
            "Acrobatics (DEX)",
            "Animal Handling (WIS)",
            "Arcana (INT)",
            "Athletics (STR)",
            "Deception (CHA)",
            "History (INT)",
            "Insight (WIS)",
            "Intimidation (CHA)",
            "Investigation (INT)",
            "Medicine (WIS)",
            "Nature (INT)",
            "Perception (WIS)",
            "Performance (CHA)",
            "Persuasion (CHA)",
            "Religion (INT)",
            "Slight of Hand (DEX)",
            "Stealth (DEX)",
            "Survival (WIS)",
          ].map((skill) => (
            <li key={skill}>
              <span className="circle"></span>
              <hr className="breakLine" />
              {skill}
            </li>
          ))}
        </ul>
      </div> */
