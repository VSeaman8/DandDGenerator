import axios from "axios";
import getRandomItem from "./helpers.js";
import features from "./data.js";

// Define the resolvers
const resolvers = {
  Query: {
    alignments: async () => {
      const response = await axios.get(
        "https://www.dnd5eapi.co/api/alignments"
      );
      return response.data.results;
    },
    randomCharacter: () => {
      return {
        personality: getRandomItem(features.personality),
        ideals: getRandomItem(features.ideals),
        bonds: getRandomItem(features.bonds),
        flaws: getRandomItem(features.flaws),
      };
    },
  },
  Mutation: {
    updateFeature: async (_, { index, name }) => {
      // This is a placeholder for updating a feature. You would implement your own logic here.
      return { index, name };
    },
  },
};

export default resolvers;
