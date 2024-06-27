const EquipmentContainer = () => {
  return (
    <div className="equipmentContainer">
      <div className="languageContainer boxconfig">
        <h3>Other Provenances & Languages</h3>
        <hr></hr>
        <p>
          Proficiencies: light armor, simple weapons, hand crossbows,
          longswords, rapiers, shortswords, thieves' tools.{" "}
        </p>
        <p>Languages: Common, Draconic </p>
      </div>
      <div className="weaponsContainer boxconfig">
        <h3>Weapons</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Bonus</th>
              <th>Damage/Type</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rapier</td>
              <td>+4</td>
              <td>1d8 +2 piercing</td>
              <td>5</td>
            </tr>
            <tr>
              {" "}
              {/* This opening <tr> tag was missing for the Shortbow row */}
              <td>Shortbow</td>
              <td>+4</td>
              <td>1d6 +2 piercing</td>
              <td>80/320</td>
            </tr>
            <tr>
              <td>Dagger</td>
              <td>+4</td>
              <td>1d4 +2 piercing</td>
              <td>20/60</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="equipmentContainer boxconfig">
        <h3>Equipment</h3>
      </div>
    </div>
  );
};

export default EquipmentContainer;
