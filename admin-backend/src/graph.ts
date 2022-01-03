import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash.merge";
import { typeDef as imgTypeDef, resolvers } from "./schema/image";

const schema = makeExecutableSchema({
  typeDefs: [
    imgTypeDef, // First defines the type Query
    // roleSchema.typeDefs, // Others extends type Query
  ],
  //   resolvers: merge(userSchema.resolvers, roleSchema.resolvers),
  resolvers,
});

export default schema;
