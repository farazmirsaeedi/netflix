import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Authuser } from "../context/Authcontext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Movies = ({ item }) => {
  const [like, setLike] = useState(false);
//   const [moviesld, setMovies] = useState([]);
  const navigate = useNavigate();
//   const [save, setSave] = useState(false);
  const { user } = Authuser();
  const movieID = doc(db, "user", `${user?.email}`);

  useEffect(() => {
    const likedStatus = localStorage.getItem(`liked_${item.id}`);
    // console.log(likedStatus);
    if (likedStatus !== null) {
      setLike(JSON.parse(likedStatus));
    }
  }, [item.id]);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSave(true);
      // Update localStorage with the new liked status
      localStorage.setItem(`liked_${item.id}`, JSON.stringify(!like));

      await updateDoc(movieID, {
        saveShows: arrayUnion({
          id: item.id,
          title: item.title,
          like: true,
          img: item.backdrop_path,
        }),
      });
    } else {
      Swal.fire({
        title: " please signUp to save movies",
        showCancelButton: true,
        confirmButtonText: "Go to SignUp page",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/Signup");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };

  return (
    <>
      <div className="w-[120px] sm:w-[200px] lg:w-[450px] lg:h-[300px] overflow-y-hidden inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 opacity-0 hover:bg-black/80 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm text-[9px] font-bold flex justify-center overflow-x-hidden items-center h-full text-center w-full">
            {item?.title}
          </p>
          <p onClick={saveShow} className="absolute top-4 left-4 text-gray-300">
            {like ? <FaHeart /> : <FaRegHeart />}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movies;
