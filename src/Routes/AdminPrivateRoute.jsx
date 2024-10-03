import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminPrivateRoute = ({ children }) => {
  const [isAdmin, adminLoading] = useAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading || adminLoading) {
    return (
      <img
        className="animate-spin"
        src="https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg"
        alt=""
      />
    );
  }
  if (user || isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminPrivateRoute;
