const GeneratorBtn = () => {
  // when clicked the button will call on the API
  // call and navigate to character page
  const handleButtonClick = (event) => {
    event.preventDefault();
  };
  return (
    <button type="button" className="btn btn-light genBtn">
      Press ME!!
    </button>
  );
  {
    /*
  return (
    <button
      type="button"
      className="btn btn-light genBtn"
      onClick={handleButtonClick}
    >
      Press ME!!
    </button>
  );
*/
  }
};

export default GeneratorBtn;
