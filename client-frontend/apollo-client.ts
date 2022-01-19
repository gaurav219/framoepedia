import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://nginx/client-backend/graphql",
  // uri: "http://172.22.0.8:80/client-backend/graphql",
  cache: new InMemoryCache(),
});
// const client = new ApolloClient({
//   ssrMode: true,
//   link: createHttpLink({
//     // uri: "/clien",
//     uri: "http://127.0.0.1:4000/client-backend/graphql",
//     credentials: "same-origin",
//     // headers: {
//     //   cookie: req.header('Cookie'),
//     // },
//   }),
//   cache: new InMemoryCache(),
// });

export default client;
