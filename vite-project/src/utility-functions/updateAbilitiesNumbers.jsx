import diceRandomiserFunction from "./diceRandomiserFunction.jsx";
import updateNumberBox from "./updateNumberBox.jsx";

function updateAbilitiesNumbers() {
  const circles = document.querySelectorAll(".circle");
  if (circles.length === 0) {
    console.error("No elements with the class 'circle' found.");
    return { success: false, message: "No elements found", updatedCount: 0 };
  }
  circles.forEach((circle) => {
    const newValue = diceRandomiserFunction();
    circle.textContent = newValue;
    const modifier = updateNumberBox(newValue);
    const numberBox = circle.closest(".attribute").querySelector(".numberBox");
    if (numberBox) {
      numberBox.textContent = modifier;
    }
  });
  return {
    success: true,
    message: "Elements updated successfully",
    updatedCount: circles.length,
  };
}

export default updateAbilitiesNumbers;
