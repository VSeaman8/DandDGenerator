import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import Layout from "./layout/Layout.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
