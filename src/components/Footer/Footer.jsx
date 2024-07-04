import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { MdMoreHoriz } from "react-icons/md";

const Footer = () => {
  const socials = [
    {
      icon: <FaFacebook />,
      name: "facebook",
    },
    {
      icon: <BsInstagram />,
      name: "instagram",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <FaLinkedin />,
      name: "linkedin",
    },
  ];
  return (
    <>
      <footer className="footer footer-center border-t-2 p-10 pb-28">
        <aside>
          <img src="/public/logo2.png" alt="" className="h-44" />
          <p className="font-bold text-xl">Sajjad Hosan</p>
          <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="flex items-center justify-center">
            <div className="w-16 h-[2px] bg-gray-500 mr-5"></div>
            {socials.map(({ icon, name }) => (
              <a
                href="https://www.google.com"
                target="_blank"
                className="btn btn-ghost transform rotate-45 my-1"
                key={name}
              >
                <div
                  className="text-xl flex transform -rotate-45 tooltip tooltip-top"
                  data-tip={name}
                >
                  {icon}
                </div>
              </a>
            ))}
            <button className="btn btn-ghost transform rotate-45 my-1">
              <div
                className="text-xl flex transform -rotate-45 tooltip tooltip-top"
                data-tip="more"
              >
                <MdMoreHoriz />
              </div>
            </button>
            <div className="w-16 h-[2px] bg-gray-500 ml-5"></div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
