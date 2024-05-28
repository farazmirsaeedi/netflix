import { Navigate } from "react-router-dom";
import { Authuser } from "../context/Authcontext";

// eslint-disable-next-line react/prop-types
const ProtectedRouter = ({ children }) => {
  const { user } = Authuser();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRouter;
