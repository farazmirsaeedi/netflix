// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";


import Main from "./Components/Main"
import Navbar from "./Components/Navbar"


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