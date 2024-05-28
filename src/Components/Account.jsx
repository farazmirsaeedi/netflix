import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Authuser } from "../context/Authcontext";
import { useEffect, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';


const Account = () => {
    // Get user data from Firestore
    const { user } = Authuser();
    const [movies, setMovies] = useState([]);
    const movieRef = doc(db, "user", `${user?.email}`);
    const deleteShow = async (passedID) => {
        try {
            localStorage.setItem(`liked_${passedID}`, JSON.stringify(false));
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                saveShows: result
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        onSnapshot(doc(db, "user", `${user?.email}`), (doc) => {
            setMovies(doc.data()?.saveShows);
        });
    }, [user?.email]);
    return (
        <>
            <div className="w-full text-white">
                <img
                    className="w-full h-[400px] object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                    alt="/"
                />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
                <div className="absolute top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
                </div>
            </div>

        </>
    );
};

export default Account;
