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

/* refactored cleaner code AI 
import "../pages/FavouriteCharPage.css";

const AttributeBox = ({ numberWord, title }) => (
  <div className="attributeBox">
    <div className="numberWord">{numberWord}</div>
    <hr />
    <h3>{title}</h3>
  </div>
);

const BasicsContainer = () => {
  const attributes = [
    { numberWord: '1', title: 'Level & Class', row: 1 },
    { numberWord: 'Outlander', title: 'Background', row: 1 },
    { numberWord: 'Neutral', title: 'Alignment', row: 1 },
    { numberWord: 'Elf', title: 'Race', row: 2 },
    { numberWord: '13', title: 'Armour Class', row: 2 },
    { numberWord: '+2', title: 'Initiative', row: 2 },
    { numberWord: '30ft', title: 'Speed', row: 3 },
    { numberWord: '10', title: 'Hit Points', row: 3 },
    { numberWord: '+2', title: 'Proficiency', row: 3 },
  ];

  return (
    <div className="basicsContainer">
      {[1, 2, 3].map(row => (
        <div className="row" key={row}>
          {attributes
            .filter(attribute => attribute.row === row)
            .map(attribute => (
              <AttributeBox
                key={attribute.title}
                numberWord={attribute.numberWord}
                title={attribute.title}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default BasicsContainer; */
