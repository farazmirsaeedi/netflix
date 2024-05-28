import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "./Movies";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Row = ({ title, fetchUrl ,rowID}) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchUrl).then((res) => setMovies(res.data.results));
  }, []);
  const sliderLeft = ()=>{
    var slider = document.getElementById('slider'+ rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const sliderRight = ()=>{
    var slider = document.getElementById('slider'+ rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  render ();
};