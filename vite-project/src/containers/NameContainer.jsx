import React, { useState, useEffect } from "react";
import updateAbilitiesNumbers from "../utility-functions/updateAbilitiesNumbers.jsx";

const NameContainer = () => {
  // Initialize state for each ability score
  const [strength, setStrength] = useState(14);
  const [dexterity, setDexterity] = useState(15);
  const [constitution, setConstitution] = useState(13);
  const [intelligence, setIntelligence] = useState(12);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(11);

  useEffect(() => {
    // Assuming updateAbilitiesNumbers is available and returns an object with new ability scores
    const newAbilities = updateAbilitiesNumbers();
    // Check if newAbilities is not undefined and has all required properties
    if (
      newAbilities &&
      "strength" in newAbilities &&
      "dexterity" in newAbilities &&
      "constitution" in newAbilities &&
      "intelligence" in newAbilities &&
      "wisdom" in newAbilities &&
      "charisma" in newAbilities
    ) {
      // Update state with new ability scores
      setStrength(newAbilities.strength);
      setDexterity(newAbilities.dexterity);
      setConstitution(newAbilities.constitution);
      setIntelligence(newAbilities.intelligence);
      setWisdom(newAbilities.wisdom);
      setCharisma(newAbilities.charisma);
    } else {
      console.error(
        "updateAbilitiesNumbers did not return a valid object:",
        newAbilities
      );
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="nameContainer">
      <div className="attribute">
        <h2>Name</h2>
        <div className="nameBox">Gehanna Dragonum</div>
      </div>
      <div className="attribute">
        <h3>Strength</h3>
        <div className="numberBox">+2</div>
        <div className="circle">{strength}</div>
      </div>
      <div className="attribute">
        <h3>Dexterity</h3>
        <div className="numberBox">+2</div>
        <div className="circle">{dexterity}</div>
      </div>
      <div className="attribute">
        <h3>Constitution</h3>
        <div className="numberBox">+1</div>
        <div className="circle">{constitution}</div>
      </div>
      <div className="attribute">
        <h3>Intelligence</h3>
        <div className="numberBox">+1</div>
        <div className="circle">{intelligence}</div>
      </div>
      <div className="attribute">
        <h3>Wisdom</h3>
        <div className="numberBox">+0</div>
        <div className="circle">{wisdom}</div>
      </div>
      <div className="attribute">
        <h3>Charisma</h3>
        <div className="numberBox">+0</div>
        <div className="circle">{charisma}</div>
      </div>
    </div>
  );
};

export default NameContainer;
