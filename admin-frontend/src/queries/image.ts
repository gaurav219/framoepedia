import { gql } from '@apollo/client';

const getImages = gql`
  {
    images {
      id
      url
      title
    }
  }
`;

export default getImages;
