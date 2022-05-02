import { checkAuth } from "../Redux/Auth/action";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth.auth);
  if (auth === false) {
    return <Navigate to="/login" replace={false} />;
  }
  return children;
};
