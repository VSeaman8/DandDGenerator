import diceRandomiserFunction from "./diceRandomiserFunction.jsx";
import updateNumberBox from "./updateNumberBox.jsx";

function updateAbilitiesNumbers() {
  const newValues = [];
  for (let i = 0; i < 6; i++) {
    const newValue = diceRandomiserFunction();
    const modifier = updateNumberBox(newValue);
    newValues.push({ value: newValue, modifier });
  }
  return newValues;
}

export default updateAbilitiesNumbers;
