import { useLocation } from "react-router-dom";
import { TbSmartHome,TbBook } from "react-icons/tb";
import { BsPersonExclamation } from "react-icons/bs";
import { IoLayersOutline } from "react-icons/io5";
import { MdOutlineContacts } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import Setting from "../Setting/Setting";
import { useState } from "react";

const BottomNav = () => {
  const [open,setOpen] = useState(false)
  const { hash } = useLocation();
  const navLinks = [
    {
      path: "#home",
      icon: <TbSmartHome />,
      label: "Home",
    },
    {
      path: "#blog",
      icon: <TbBook />,
      label: "Blog",
    },
    
    {
      path: "#about",
      icon: <BsPersonExclamation />,
      label: "About",
    },
    {
      path: "#skill",
      icon: <LuLayoutDashboard />,
      label: "Skill",
    },
    {
      path: "#projects",
      icon: <IoLayersOutline />,
      label: "Projects",
    },
    {
      path: "#contact",
      icon: <MdOutlineContacts />,
      label: "Contact",
    },
  ];
  const navButtons = navLinks.map(({ path, icon, label }) => (
    <a
      key={path}
      href={path}
      className={`btn btn-sm m-2 btn-neutral ${
        path === hash ? "btn-active" : "btn-ghost"
      }`}
    >
      <li className="text-xl tooltip tooltip-top" data-tip={label}>
        {icon}
      </li>
    </a>
  ));
  return (
    <>
      <Setting setOpen={setOpen} />
      <div className="flex items-center justify-center">
        <ul className="flex items-center justify-center px-5 py-2 bg-[#FFB72B] rounded-full fixed bottom-5">
          {navButtons}
          <li>|</li>
          <li>
            <button
              onClick={() => {
                document.getElementById("setting").showModal()
                setOpen(!open)
              }}
              className={`btn btn-sm text-xl tooltip mt-1 ml-2 ${open ? 'btn-neutral' : 'btn-ghost'}`}
              data-tip="Setting"
            >
              <GoGear />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BottomNav;
