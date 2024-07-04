import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "World Journeys",
      image:
        "https://camo.githubusercontent.com/728bae78decc4562d1601f5d8773f719df45ff0b82f9f6070eb98f2c7c7e5515/68747470733a2f2f692e6962622e636f2f424b3967546d582f576f726c642d4a6f75726e6579732d486f6d652d312e706e67",
      live: " https://world-journeys-6b61a.web.app/",
      gitRepo: "https://github.com/Sajjad-Hosan/world-journeys",
      description:
        "This is a web page. Where can you find tranvel related data.You see where you want to go and see that place related information.I think You will enjoy this web page.",
      features: ["Light/dark mode toggle", "Live previews", "Private Mode"],
      skill: [
        "Swiper Slider",
        "React Helmet",
        "React Simple Type",
        "React Awesome Reveal",
        "SweetAlret2",
        "React Tooltip",
        "React Router Dom",
        "Tailwindcss",
        "Daisyui",
        "React-icons",
        "React Props",
      ],
    },
    {
      id: 2,
      name: "humanity-helpers",
      image: "https://i.ibb.co/98bP6hD/humanity.png",
      live: " https://humanityhelpersplatform.web.app/",
      gitRepo: "https://github.com/Sajjad-Hosan/humanity-helpers",
      description:
        "This is a volunteer related website. You can volunteer here if you want. The purpose of this page is to help those who don't have a good life to have a better life.",
      features: ["authentication", "dashboard", "Private Mode"],
      skill: [
        "react-router-dom",
        "tailwindcss",
        "daisyui",
        "animate.css",
        "axios",
        "firebase",
        "flowbite-react",
        "framer-motion",
        "prop-types",
        "react-awesome-reveal",
        "react-datepicker",
        "react-helmet-async",
        "react-hot-toast",
        "react-icons",
        "react-simple-typewriter",
        "react-toastify",
        "sweetalert2",
        "swiper",
      ],
    },
    {
      id: 3,
      name: "AmiciAdoptHub",
      image: "https://i.ibb.co/KDKBP4S/Amici-Adopt-Hub.png",
      live: " https://amiciadopthub.web.app/",
      gitRepo: "https://github.com/Sajjad-Hosan/AmiciAdoptHub",
      description:
        "This is a adopt pet website. You can adopted any pet from here. Also you can post here to sell your pet. You can also donated or make a donation post. Be happy to use it!",
      features: ["authentication", "dashboard", "Private Mode"],
      skill: [
        "react-router-dom",
        "tailwindcss",
        "daisyui",
        "animate.css",
        "axios",
        "firebase",
        "flowbite-react",
        "framer-motion",
        "prop-types",
        "react-awesome-reveal",
        "react-datepicker",
        "react-helmet-async",
        "react-hot-toast",
        "react-icons",
        "react-simple-typewriter",
        "react-toastify",
        "sweetalert2",
        "swiper",
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-14 md:gap-20 items-center p-5">
        <div className="space-y-3">
          <h1 className="text-3xl"> My Projects</h1>
          <p className="text-center">See the works here,</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
