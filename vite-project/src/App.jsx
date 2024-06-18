import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import FavouriteCharPage from "./pages/FavouriteCharPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./layout/Layout.jsx";

import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div>
      <Layout page={location.pathname}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/FavouriteCharPage" element={<FavouriteCharPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
