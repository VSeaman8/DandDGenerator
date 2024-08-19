import { gql } from "apollo-server-express";

// Define the GraphQL schema

const typeDefs = gql`
  type Feature {
    index: String
    name: String
  }

  type Character {
    personality: String
    ideals: String
    bonds: String
    flaws: String
  }

  type Query {
    alignments: [Feature]
    randomCharacter: Character
  }

  type Mutation {
    updateFeature(index: String!, name: String!): Feature
  }
`;

export default typeDefs;
