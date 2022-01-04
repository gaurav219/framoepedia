import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { imgtypeDef, imgResolvers } from "./schema/image";
import { usrtypeDef, usrResolvers } from "./schema/user";

const types = [imgtypeDef, usrtypeDef];
const resolves = [imgResolvers, usrResolvers];

const Schema = mergeTypeDefs(types);

const Resolvers = mergeResolvers(resolves);

const schema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
});

export default schema;
