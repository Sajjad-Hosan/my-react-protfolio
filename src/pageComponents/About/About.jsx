import { IoDocumentTextOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="card md:flex-row justify-between items-center max-w-screen-xl mx-auto mt-10 p-5">
      <div className="lg:w-1/2">
        <p className="w-1/2 divider divider-neutral text-xl font-semibold -mb-5 mr-auto">
          Who am i ?
        </p>
        <img src="https://i.ibb.co/ZNv8Nft/about.png" alt="" />
      </div>
      <div className="p-5 md:w-1/2 text-left">
        <h1 className="text-2xl font-medium">About Me -</h1>
        <h2 className="mt-8">Assalamu Aliakum!</h2>
        <p className="font-light mt-3 leading-7 ">
          I'm <b className="text-orange-500 font-bold text-xl">Sajjad Hosan</b>.
          I'm not a popular person. I'm just a normal adult child. Who have a
          dream to become a popular men. I am currently now read in class 12. I
          love coading, bugs fixing, error handeling, etc...
        </p>
        <p className="font-light mt-12 leading-7">
          I am a passionate <strong>Junior Frontend Developer</strong> with a
          strong foundation in HTML, CSS, JavaScript, React, and Next.js. I am
          committed to creating web pages that deliver optimal performance and
          user-friendly experiences. My journey into web development has also
          included learning backend technologies like Express, MongoDB, and
          Node.js. I am always eager to expand my skills and knowledge, striving
          to understand both successes and failures to ultimately achieve
          excellence in web development.
        </p>
        <a
          className="btn btn-outline mt-10"
          href="/src/resume/sajjad-hosan.pdf"
          download={"sajjad_hosan"}
        >
          <IoDocumentTextOutline className="text-xl" /> CV Download
        </a>
      </div>
    </div>
  );
};

export default About;
