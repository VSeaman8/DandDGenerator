import fetchData from "./fetchData.js";

// Resolver for the classes query
const resolvers = {
  classes: async () => {
    return await fetchData();
  },
};

export default resolvers;
