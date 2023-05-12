import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function RequireAuth({ roles }) {
  const { Auth } = useAuth();
  const location = useLocation();
  // if roles are multiple and they are in the form of array the logic will be --> Auth?.roles?.find(role=> roles?includes(role)) instead of Auth?.roles === roles
  return Auth?.roles === roles ? (
    <Outlet />
  ) : Auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default RequireAuth;
