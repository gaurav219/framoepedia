// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextPage, NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";

import styles from "../styles/Home.module.css";
type Data = {
  name: string;
};

const Home: NextPage = () => {
  // Axios.get(`http://localhost:5001/home`).then((data) =>
  //   console.log(data.data)
  // );

  fetch("http://localhost:5001/home")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return <div className={styles.container}>Smpl</div>;
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
