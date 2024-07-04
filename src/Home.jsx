import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import SkillSection from "./pageComponents/SkillSection/SkillSection";
import { RiUserFollowLine } from "react-icons/ri";
import About from "./pageComponents/About/About";
import Contact from "./pageComponents/Contact/Contact";
import ProjectsSection from "./pageComponents/ProjectsSection/ProjectsSection";
import Blogs from "./pageComponents/Blogs/Blogs";

// make the project card only show image and name.when hover then show the details or show an extra card


const Home = () => {
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
    <div className="flex flex-col justify-between gap-24">
      <section id="home">
        <div className="hero bg-[#f1f1f1] md:h-[550px] rounded-ee-full mt-10">
          <div className="hero-content flex-col-reverse gap-20 lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/Nn4TsvM/boy.png"
              alt="anim"
              className="w-[400px] h-[500px] object-cover"
            />
            <div className="md:w-1/2 flex items-center gap-10 md:gap-20">
              <div className="flex flex-col items-center">
                <div className="h-14 w-[1px] border border-gray-400 mb-8"></div>
                {socials.map(({ icon, name }) => (
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="btn btn-outline tooltip tooltip-top flex transform rotate-45 my-1"
                    key={name}
                    data-tip={name}
                  >
                    <div className="text-xl flex transform -rotate-45">
                      {icon}
                    </div>
                  </a>
                ))}
                <div className="h-14 w-[1px] border border-gray-400 mt-8"></div>
              </div>
              <div className="w-full">
                <p className="divider divider-neutral tex-sm font-semibold mb-3">
                  Assalamu Alaikum
                </p>
                <p className="text-3xl md:text-4xl flex items-center gap-5 text-gray-400">
                  I'm
                  <h1 className="font-bold text-gray-700">
                    <Typewriter
                      words={[
                        "Sajjad Hosan",
                        "an Developer",
                        "an Coder",
                        "an Creative Designer",
                      ]}
                      loop={false}
                      cursor
                      cursorStyle=">"
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </h1>
                </p>
                <p className="py-6 font-light flex flex-wrap">
                  <h1 className="font-bold">Web Development </h1> is a platform
                  which can craft beautiful, minimal and usable interfaces.
                </p>
                <a
                  href="https://www.facebook.com/search/top/?q=sajjadhosan111"
                  className="btn btn-outline"
                >
                  <RiUserFollowLine className="text-lg" /> Follow Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skill">
        <SkillSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="blog">
        <Blogs />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
