import { Outlet } from "react-router-dom";
import BottomNav from "./components/BottomNav/BottomNav";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto relative py-5 mb-8">
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default Root;
