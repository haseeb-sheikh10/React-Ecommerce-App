import { FC } from "react";

interface AdminNavbarProps {}

const AdminNavbar: FC<AdminNavbarProps> = () => {
  return (
    <nav className="bg-white h-[50px] shadow-lg sticky top-0 w-full" style={{}}>
      <h1 className="text-black text-2xl">Admin Panel</h1>
    </nav>
  );
};

export default AdminNavbar;
