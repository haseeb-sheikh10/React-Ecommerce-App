import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminRoutes from "./layouts/admin/AdminRoutes";
import ClientRoutes from "./layouts/client/ClientRoutes";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<ClientRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default App;
