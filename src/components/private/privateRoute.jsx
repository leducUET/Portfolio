import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
