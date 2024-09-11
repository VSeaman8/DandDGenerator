import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import getRandomItem from "./utility-functions/helpers.js";

import FavouriteCharPage from "./pages/FavouriteCharPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./layout/Layout.jsx";

import "./App.css";

function App() {
  const [classes, setClasses] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const query = `
      {
        classes {
          name
        }
      }`;
      try {
        const response = await axios.post("https://www.dnd5eapi.co/graphql", {
          query: query, // Ensure the query is formatted correctly
        });
        console.log("Fetched classes:", response.data.data.classes);
        const randomClass = getRandomItem(response.data.data.classes);
        setClasses([randomClass]);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
          if (error.response.data.errors) {
            error.response.data.errors.forEach((err) => {
              console.error("GraphQL Error:", err.message);
            });
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Request data:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error message:", error.message);
        }
      }
    };

    fetchData();
  }, []);

  console.log("Classes state:", classes);

  return (
    <div>
      <Layout page={location.pathname}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/FavouriteCharPage"
            element={<FavouriteCharPage classes={classes} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
