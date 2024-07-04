import { Outlet } from "react-router-dom";
import BottomNav from "./components/BottomNav/BottomNav";
import Footer from "./components/Footer/Footer";

const Root = () => {
  return (
    <>
    <div className="max-w-screen-xl mx-auto relative py-5 mb-8">
      <Outlet />
      <BottomNav />
    </div>
    <Footer/>
    </>
  );
};

export default Root;
