import { useState, useEffect } from "react";
import axios from "axios";
import FavouriteCharPage from "../pages/FavouriteCharPage";

const DataFetcher = () => {
  const [data, setData] = useState({ classes: [], alignments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const classesResponse = await axios.get("/api/classes");
      const alignmentsResponse = await axios.get("api/alignments");
      setData({
        classes: classesResponse.data,
        alignments: alignmentsResponse.data,
      });
    };
    fetchData();
  }, []);

  return (
    <FavouriteCharPage classes={data.classes} alignments={data.alignments} />
  );
};

export default DataFetcher;
