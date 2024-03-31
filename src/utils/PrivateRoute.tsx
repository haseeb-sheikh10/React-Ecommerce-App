import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  to: string;
  isAuthenticated: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ to, isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={to} replace />;
};

export default PrivateRoute;
