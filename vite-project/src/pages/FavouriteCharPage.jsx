import BasicsContainer from "../containers/BasicsContainer.jsx";
import EquipmentContainer from "../containers/EquipmentContainer.jsx";
import FeaturesContainer from "../containers/FeaturesContainer.jsx";
import NameContainer from "../containers/NameContainer.jsx";
import SkillsContainer from "../containers/SkillsContainer.jsx";
import TraitsContainer from "../containers/TraitsContainer.jsx";

import "./FavouriteCharPage.css";
import "../containers/BasicsContainer.css";
import "../containers/EquipmentContainer.css";
import "../containers/FeaturesContainer.css";
import "../containers/NameContainer.css";
import "../containers/SkillsContainer.css";
import "../containers/TraitsContainer.css";

const FavouriteCharPage = () => {
  return (
    <div className="MainCharacterContainer">
      <div className="nameContainerGrid">
        <NameContainer />
      </div>
      <div className="skillsContainerGrid">
        <SkillsContainer />
      </div>
      <div className="basicsContainerGrid">
        <BasicsContainer />
      </div>
      <div className="equipmentContainerGrid">
        <EquipmentContainer />
      </div>
      <div className="traitsContainerGrid">
        <TraitsContainer />
      </div>
      <div className="featuresContainerGrid">
        <FeaturesContainer />
      </div>
    </div>
  );
};
export default FavouriteCharPage;
