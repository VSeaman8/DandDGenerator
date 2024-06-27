import { useNavigate } from "react-router-dom";

const GeneratorBtn = () => {
  const navigate = useNavigate();

  const handleButtonClick = async (event) => {
    event.preventDefault();
    navigate("/favouriteCharPage");
  };

  return (
    <button
      type="button"
      className="btn btn-light genBtn"
      onClick={handleButtonClick}
    >
      Press ME!!
    </button>
  );
};

export default GeneratorBtn;

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
