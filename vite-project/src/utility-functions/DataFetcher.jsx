import React, { useEffect, useState } from "react";
import axios from "axios";
import FavouriteCharPage from "../pages/FavouriteCharPage";

const DataFetcher = () => {
  const [data, setData] = useState({ classes: [], alignments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        {
          classes
          alignments
        }
      `;

      // Log the query to ensure it's correctly formatted
      console.log("GraphQL Query:", query);

      try {
        const response = await axios.post("http://localhost:3000/graphql", {
          query: query,
        });

        const { classes, alignments } = response.data.data;

        console.log("Classes Response:", classes);
        console.log("Alignments Response:", alignments);

        // Log data before setting state
        console.log("Data before setting state:", { classes, alignments });

        setData({
          classes: classes,
          alignments: alignments,
        });

        // Log data after setting state
        console.log("Data after setting state:", { classes, alignments });
      } catch (error) {
        console.error("Error fetching data:", error);
        // Log the error response for more details
        if (error.response) {
          console.error("Error response data:", error.response.data);
          // Log each error in the response
          error.response.data.errors.forEach((err, index) => {
            console.error(`Error ${index + 1}:`, err);
          });
        }
      }
    };
    fetchData();
  }, []);

  return (
    <FavouriteCharPage classes={data.classes} alignments={data.alignments} />
  );
};

export default DataFetcher;
