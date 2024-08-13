// Example Backend server

// const express = require("express");
// const app = express();

// // Mock data
// const features = {
//   personality: ["Brave", "Cautious", "Impulsive", "Calm"],
//   ideals: ["Justice", "Freedom", "Power", "Knowledge"],
//   bonds: ["Family", "Friends", "Mentor", "Community"],
//   flaws: ["Greedy", "Arrogant", "Lazy", "Stubborn"],
// };

// // Helper function to get a random item from an array
// const getRandomItem = (array) =>
//   array[Math.floor(Math.random() * array.length)];

// app.get("/api/random-character", (req, res) => {
//   const randomCharacter = {
//     personality: getRandomItem(features.personality),
//     ideals: getRandomItem(features.ideals),
//     bonds: getRandomItem(features.bonds),
//     flaws: getRandomItem(features.flaws),
//   };
//   res.json(randomCharacter);
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
