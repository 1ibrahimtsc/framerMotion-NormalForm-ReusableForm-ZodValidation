import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
import Sidebar from "./sidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <div className="flex-[1]">
        <Sidebar />
      </div>
      <div className="flex-[6]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
