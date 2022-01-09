// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useState } from "react";
import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
// import Axios from "axios";
import { Images } from "./interfaces/Image";
import getImages from "./queries/image";
import styles from "../styles/Home.module.css";
import client from "../apollo-client";
// type Data = {
//   name: string;
// };

// function Home({ hello }: InferGetStaticPropsType<typeof getStaticProps>) {
const Home: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // Axios.get(`http://localhost:5001/home`).then((data) =>
  //   console.log(data.data)
  // );
  // console.log(error, "er");
  console.log(data);
  // fetch("http://localhost:5001/home")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  return <div className={styles.container}>Smpl</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  // const resp = await Axios.get("http://localhost:5001/graphql");

  // const client = new ApolloClient({
  //   uri: "http://127.0.0.1:5001/graphql",
  //   cache: new InMemoryCache(),
  // });
  const { data } = await client.query({
    query: getImages,
  });
  return {
    props: {
      data,
    },
  };
};

export default Home;

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   // const { data } = await Axios.get(`http://localhost:5001/home`);
//   // console.log(data);
//   res.status(200).json({ name: "John Doe" });
// }
