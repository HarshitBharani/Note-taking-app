import { Outlet } from "react-router";
import { Sidebar } from "../Components/Sidebar";

export const Home = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};
