import { request, gql } from "graphql-request";

const endpoint = "https://www.dnd5eapi.co/graphql";

const fetchData = async () => {
  const query = gql`
    {
      classes {
        name
      }
    }
  `;

  try {
    const data = await request(endpoint, query);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
