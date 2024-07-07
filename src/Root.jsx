import { Outlet } from "react-router-dom";
import BottomNav from "./components/BottomNav/BottomNav";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-screen-xl mx-auto relative py-5 mb-8">
        <Outlet />
        <BottomNav />
      </div>
      <Footer />
    </>
  );
};

export default Root;
