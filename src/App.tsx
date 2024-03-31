import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminRoutes from "./layouts/admin/AdminRoutes";
import ClientRoutes from "./layouts/client/ClientRoutes";
import { useEffect } from "react";
import { fetchConfig } from "./redux/globalAction";
import { useAppDispatch } from "./redux/store";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);
  return (
    <Routes>
      <Route index path="/*" element={<ClientRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default App;
