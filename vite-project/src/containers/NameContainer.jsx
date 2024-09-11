import React, { useState, useEffect } from "react";
import updateAbilitiesNumbers from "../utility-functions/updateAbilitiesNumbers.jsx";

const NameContainer = () => {
  const defaultAbilities = [
    { value: 14, modifier: "+2" },
    { value: 15, modifier: "+2" },
    { value: 13, modifier: "+1" },
    { value: 12, modifier: "+1" },
    { value: 10, modifier: "+0" },
    { value: 11, modifier: "+0" },
  ];

  const [abilities, setAbilities] = useState(defaultAbilities);

  useEffect(() => {
    // Assuming updateAbilitiesNumbers is available and returns an object with new ability scores
    const newAbilities = updateAbilitiesNumbers();
    setAbilities(newAbilities);
  }, []);

  return (
    <div className="nameContainer">
      <div className="attribute">
        <h2>Name</h2>
        <div className="nameBox">Gehanna Dragonum</div>
      </div>
      {abilities.map((ability, index) => (
        <div className="attribute" key={index}>
          <h3>
            {
              [
                "Strength",
                "Dexterity",
                "Constitution",
                "Intelligence",
                "Wisdom",
                "Charisma",
              ][index]
            }
          </h3>
          <div className="numberBox">{ability.modifier}</div>
          <div className="circle">{ability.value}</div>
        </div>
      ))}
    </div>
  );
};

export default NameContainer;
