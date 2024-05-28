
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "./Movies";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


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
  return (
    <>
      <h2 className=" text-white font-bold md:text-xl p-4">{title}</h2>
      <div className=" relative flex items-center justify-center group lg:h-[450px]">
        <MdChevronLeft
        onClick={sliderLeft}
          size={40}
          className=" bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 z-20 cursor-pointer  hidden group-hover:block"
        />
        <div
          id={"slider" +rowID}
          className=" w-full h-full  overflow-x-scroll whitespace-nowrap scrollbar-hide relative "
        >
          {movies.map((item, id) => (

            <Movies key={id} item={item} />
          ))}
        </div>

        <MdChevronRight
        onClick={sliderRight}
          size={40}
          className="z-20 bg-white right-0 rounded-full absolute opacity-50  hover:opacity-100 cursor-pointer  hidden group-hover:block "
        />
      </div>
    </>
  );
};

export default Row;
