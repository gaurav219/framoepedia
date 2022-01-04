import { gql } from "apollo-server-express";

const usrtypeDef = gql`
  type Query {
    hello: ID!
  }
`;

const usrResolvers = {
  Query: {
    hello: () => 50,
  },
};

export { usrtypeDef, usrResolvers };
