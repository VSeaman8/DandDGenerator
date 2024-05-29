import BasicsContainer from "../containers/BasicsContainer.jsx";
import EquipmentContainer from "../containers/EquipmentContainer.jsx";
import FeaturesContainer from "../containers/FeaturesContainer.jsx";
import NameContainer from "../containers/NameContainer.jsx";
import SkillsContainer from "../containers/SkillsContainer.jsx";
import TraitsContainer from "../containers/TraitsContainer.jsx";

const FavouriteCharPage = () => {
  return (
    <div className="MainCharacterContainer">
      This is the favorite char page
      <SkillsContainer />
      <BasicsContainer />
      <NameContainer />
      <EquipmentContainer />
      <TraitsContainer />
      <FeaturesContainer />
    </div>
  );
};
export default FavouriteCharPage;
