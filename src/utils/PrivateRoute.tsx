import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  to: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ to }) => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={to} replace />;
};

export default PrivateRoute;
