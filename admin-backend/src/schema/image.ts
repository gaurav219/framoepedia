import { gql } from "apollo-server-express";

const typeDef = gql`
  type Query {
    images: [Image!]!
    sample: ID!
  }

  type Image {
    id: String!
    url: String!
    title: String!
  }
`;

const resolvers = {
  Query: {
    sample: () => 20,
    images: () => [
      {
        id: "cknwscj8934829",
        url:
          "https://i.guim.co.uk/img/media/ec27f69b7e4ac14838e8f71842a4cc6db3b8d69c/112_4_1179_708/master/1179.jpg?width=620&quality=85&auto=format&fit=max&s=06ede65b7fdd997b4a7da379326a43e2",
        title: "Batman",
      },
    ],
  },
};

export { typeDef, resolvers };
