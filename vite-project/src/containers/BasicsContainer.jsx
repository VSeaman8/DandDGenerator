import "../pages/FavouriteCharPage.css";

const BasicsContainer = () => {
  return (
    <div className="basicsContainer">
      <div className="row">
        <div className="attributeBox">
          <div className="levelClassContainer">
            <div className="level">1</div>
            <div className="class">ROGUE</div>
          </div>
          <hr />
          <h3>Level & Class</h3>
        </div>
        <div className="attributeBox">
          <div className="numberWord">Outlander</div>
          <hr />
          <h3>Background</h3>
        </div>
        <div className="attributeBox">
          <div className="numberWord">Neutral</div>
          <hr />
          <h3>Alignment</h3>
        </div>
      </div>
      <div className="row">
        <div className="attributeBox">
          <div className="numberWord">Elf</div>
          <hr />
          <h3>Race</h3>
        </div>
        <div className="attributeBox">
          <div className="numberWord">13</div>
          <hr />
          <h3>Armour Class</h3>
        </div>
        <div className="attributeBox">
          <div className="numberWord">+2</div>
          <hr />
          <h3>Initiative</h3>
        </div>
      </div>
      <div className="row">
        <div className="attributeBox">
          <div className="numberWord">30ft</div>
          <hr />
          <h3>Speed</h3>
        </div>
        <div className="attributeBox">
          <div className="numberWord">10</div>
          <hr />
          <h3>Hit Points</h3>
        </div>
        <div className="attributeBox">
          <div className="numberWord">+2</div>
          <hr />
          <h3>Proficiency</h3>
        </div>
      </div>
    </div>
  );
};

export default BasicsContainer;
