import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../utils/PrivateRoute";
import Navabar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

interface ClientRoutesProps {}

const ClientRoutes: FC<ClientRoutesProps> = () => {
  return (
    <>
      <Navabar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/signup" element={<h1>Signup</h1>} />
        <Route
          path="/account"
          element={<PrivateRoute to="/login" isAuthenticated={true} />}
        >
          <Route path="profile" element={<h1>Profile</h1>} />
          <Route index element={<Navigate to={"profile"} replace />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </>
  );
};

export default ClientRoutes;
