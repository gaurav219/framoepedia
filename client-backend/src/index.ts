import Hapi, { Request, Server } from "@hapi/hapi";
import { ApolloServer } from "apollo-server-hapi";
import schema from "./graph";

const init = async () => {
  const graphql = new ApolloServer({
    schema,
  });

  await graphql.start();

  const server: Server = Hapi.server({
    port: 5001,
    host: "0.0.0.0",
  });

  const app = server;

  await graphql.applyMiddleware({ app });

  server.route({
    method: "GET",
    path: "/",
    handler: (request: Request) => {
      return "Hello from client-backend!";
    },
  });

  server.route({
    method: "GET",
    path: "/home",
    options: {
      cors: true,
      handler: (request: Request, h: Response) => {
        return { name: "Jamie Foxx" };
      },
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
