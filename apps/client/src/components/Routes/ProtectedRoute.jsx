import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoadingAnimation from "../Fragments/LoadingAnimation";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, isFetched } = useAuth();

  if (!isFetched) return <LoadingAnimation />;

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
