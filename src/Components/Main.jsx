import axios from "axios";
import { useEffect, useState } from "react";
import requets from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(requets.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <>
      <div>

      </div>
    </>
  );
};

export default Main;
