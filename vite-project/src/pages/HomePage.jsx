import GeneratorBtn from "../components/GeneratorBtn.jsx";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <div className="homePageTitle">
        <h2>Dungeons & </h2>
        <h2>Dragons </h2>
        <h2>Character </h2>
        <h2>Generator</h2>
      </div>
      <GeneratorBtn />
    </div>
  );
};
export default HomePage;
