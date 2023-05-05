import Navbar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
export default function layout() {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side bg-slate-400">
          <Navbar />
        </div>
      </div>
    </>
  );
}
