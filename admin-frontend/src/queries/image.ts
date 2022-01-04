import { gql } from "@apollo/client";

const getImages = gql`
  {
    image {
      id
      url
      title
    }
  }
`;

export default getImages;
