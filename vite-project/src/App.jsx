import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";

import DataFetcher from "./utility-functions/DataFetcher.jsx";
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
        const response = await axios.post("http:localhost:3000/graphql", {
          query,
        });
        setClasses(response.data.data.classes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  }, []);

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
