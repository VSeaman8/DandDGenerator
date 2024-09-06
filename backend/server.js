import express from "express";
import { graphqlHTTP } from "express-graphql";
import colors from "colors";

import resolvers from "./resolvers.js";
import schema from "./schema.js";
import fetchData from "./fetchData.js";

// set port to PORT

const port = 3000;

// instance of Express application
const app = express();

// GraphQL endpoint with schema and GraphiQL interface
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

fetchData();

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/graphql`.cyan);
});
