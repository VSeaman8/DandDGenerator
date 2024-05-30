import "../pages/FavouriteCharPage.css";

const BasicsContainer = () => {
  return (
    <div className="basicsContainer">
      <div className="row">
        <h3>Level & class</h3>
        <h3>Background</h3>
        <h3>Alignment</h3>
      </div>
      <div className="row">
        <h3>Race</h3>
        <h3>Armour Class</h3>
        <h3>Initiative</h3>
      </div>
      <div className="row">
        <h3>Speed</h3>
        <h3>Hit Points</h3>
        <h3>Proficiency</h3>
      </div>
    </div>
  );
};

export default BasicsContainer;
