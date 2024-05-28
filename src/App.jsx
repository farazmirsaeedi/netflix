import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/Authcontext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./components/Account";
import ProtectedRouter from "./components/ProtectedRouter";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Account" element={<ProtectedRouter><Account /></ProtectedRouter>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
