const TraitsContainer = () => {
  return (
    <div className="TraitsContainer">
      <h3>Features & Traits</h3>
      <div className="trait">
        <h3>Racial</h3>
        <p>
          Draconic Ancestry: Your breath weapon and damage resistance are
          determined by the dragon type you choose.
        </p>
        <p>
          Breath Weapon: 1/rest Action to exhale destructive energy, shape and
          saving throw determined by ancestry. DC is 8+Con mod+proficiency.
          Damage is 2d6, half as much on successful save. Damage increases to
          3d6 at 6th, 4d6 at 11th, and 5d6 at 16th.
        </p>
      </div>
      <div className="trait">
        <h3>Class</h3>
        <p>
          Expertise: 2x proficiency for two skills, or one skill and thieves'
          tools.
        </p>
        <p>
          Sneak Attack: Once per turn add 1d6 damage to an attack if you have
          advantage or a non-incapacitated ally adjacent (and you don't have
          disadvantage). Attack must be a ranged weapon or finesse. Damage
          increases as you level.
        </p>
        <p>
          Thieves' Cant: a secret mix of dialect, jargon, and code that allows
          you to hide messages in seemingly normal conversation. Only others
          that knows thieves' cant understand such messages. It takes four times
          longer to convey than it does to speak the same idea plainly. You also
          understand secret signs in the cant.
        </p>
      </div>
    </div>
  );
};
export default TraitsContainer;
