import { FC } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import AdminNavbar from "./components/navbar/AdminNavbar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <div
          className="container py-6 px-10"
          style={{
            height: "calc(100% - 50px)",
            overflowY: "auto",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
