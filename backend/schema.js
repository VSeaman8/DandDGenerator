import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Class {
    name: String
  }

  type Query {
    classes: [Class]
  }
`);

export default schema;
