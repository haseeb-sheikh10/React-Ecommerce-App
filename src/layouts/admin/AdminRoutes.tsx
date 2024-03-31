import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/auth/AdminLogin";
import PrivateRoute from "../../utils/PrivateRoute";
import AdminLayout from "./AdminLayout";
import { SetupAxios } from "./core/SetupAxios";
import axios from "axios";

interface AdminRoutesProps {}

const AdminRoutes: FC<AdminRoutesProps> = () => {
  SetupAxios(axios);
  const isAuthenticated = true;
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route
        path="/"
        element={
          <AdminLayout>
            <PrivateRoute to="/admin/login" isAuthenticated={isAuthenticated} />
          </AdminLayout>
        }
      >
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
        <Route path="users" element={<h1>Users</h1>} />
        <Route path="products" element={<h1>Products</h1>} />
        <Route path="orders" element={<h1>Orders</h1>} />
        <Route index element={<Navigate to="dashboard" />} />
      </Route>
      <Route
        index
        element={
          <Navigate
            to={isAuthenticated ? "/admin/dashboard" : "/admin/login"}
          />
        }
      />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AdminRoutes;
