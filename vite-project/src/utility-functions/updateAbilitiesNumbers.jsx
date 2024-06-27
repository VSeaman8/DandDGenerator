import diceRandomiserFunction from "./diceRandomiserFunction.jsx";

function updateAbilitiesNumbers() {
  const circles = document.querySelectorAll(".circle");
  if (circles.length === 0) {
    console.error("No elements with the class 'circle' found.");
    return;
  }
  circles.forEach((circle) => {
    const newValue = diceRandomiserFunction();
    circle.textContent = newValue;
  });
}

export default updateAbilitiesNumbers;
