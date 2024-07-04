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
      skill: ["react", "tailwindcss", "mongodb", "express", "daisyui"],
    },
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
      skill: ["react", "tailwindcss", "mongodb", "express", "daisyui"],
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
