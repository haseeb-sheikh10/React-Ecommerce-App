import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/auth/AdminLogin";
import PrivateRoute from "../../utils/PrivateRoute";
import AdminLayout from "./AdminLayout";

interface AdminRoutesProps {}

const AdminRoutes: FC<AdminRoutesProps> = () => {
  const isAuthenticated = true;
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/" element={<PrivateRoute to="/admin/login" />}>
        <Route path="dashboard" element={<AdminLayout />} />
        <Route path="users" element={<h1>Users</h1>} />
        <Route path="products" element={<h1>Products</h1>} />
        <Route path="orders" element={<h1>Orders</h1>} />
        <Route index element={<Navigate to="dashboard" />} />
      </Route>
      <Route
        index
        element={<Navigate to={isAuthenticated ? "dashboard" : "login"} />}
      />
    </Routes>
  );
};

export default AdminRoutes;
