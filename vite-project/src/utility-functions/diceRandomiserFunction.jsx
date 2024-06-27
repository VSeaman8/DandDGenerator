const diceRandomiserFunction = () => {
  const rolls = Array.from(
    { length: 4 },
    () => Math.floor(Math.random() * 6) + 1
  );
  const topThree = rolls.sort((a, b) => b - a).slice(0, 3);
  return topThree.reduce((total, current) => total + current, 0);
};

export default diceRandomiserFunction;
