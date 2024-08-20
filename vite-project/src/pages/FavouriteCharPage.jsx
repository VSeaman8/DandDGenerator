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
/*import "../containers/SkillsContainer.css";*/
import "../containers/TraitsContainer.css";

const FavouriteCharPage = ({ classes, alignments }) => {
  return (
    <div className="MainCharacterContainer">
      <div className="nameContainerGrid">
        <NameContainer />
      </div>
      <div className="basicsContainerGrid">
        <BasicsContainer classes={classes} alignments={alignments} />
      </div>
      <div className="skillsContainerGrid">
        <SkillsContainer />
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

//  <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Character Generator</title>
//   <link rel="stylesheet" href="FeaturesContainer.css">
// </head>
// <body>
//   <div class="personalityContainer"></div>
//   <div class="idealsContainer"></div>
//   <div class="bondsContainer"></div>
//   <div class="flawsContainer"></div>
//   <button id="generateCharacter">Generate Character</button>

//   <script>
//     document.getElementById('generateCharacter').addEventListener('click', generateCharacter);

//     async function generateCharacter() {
//       try {
//         const response = await fetch('https://api.example.com/random-character');
//         const data = await response.json();

//         document.querySelector('.personalityContainer').textContent = data.personality;
//         document.querySelector('.idealsContainer').textContent = data.ideals;
//         document.querySelector('.bondsContainer').textContent = data.bonds;
//         document.querySelector('.flawsContainer').textContent = data.flaws;
//       } catch (error) {
//         console.error('Error fetching character data:', error);
//       }
//     }
//   </script>
// </body>
// </html>
