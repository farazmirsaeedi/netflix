// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";


import Navbar from "./Components/Navbar"
import Home from "./pages/Home";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default App