import { gql } from "apollo-server-hapi";

const usrtypeDef = gql`
  type Query {
    users: [User!]!
  }

  type User {
    id: String!
    type: String!
    email: String!
    pass: String!
  }
`;

const usrResolvers = {
  Query: {
    users: () => [
      {
        id: "sodjovicui75834",
        type: "admin",
        email: "gopu123@gmail.com",
        pass: "gopu123",
      },
      {
        id: "cjibiuabcioa7849",
        type: "client",
        email: "cheenu123@gmail.com",
        pass: "cheenu123",
      },
    ],
  },
};

export { usrtypeDef, usrResolvers };
