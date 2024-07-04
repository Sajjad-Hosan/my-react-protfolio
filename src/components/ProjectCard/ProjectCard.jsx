import { RiGitRepositoryLine } from "react-icons/ri";
import { IoLink } from "react-icons/io5";
import { IoHeart,IoHeartOutline  } from "react-icons/io5";

const ProjectCard = ({ project }) => {
  const { id, name, image, live, gitRepo, description, features, skill } =
    project;
  return (
    <>
      <div className="card p-8 bg-base-100 shadow-2xl relative">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">{name}</h1>
          <button
            className={`btn btn-sm px-6`}
          >
            <IoHeartOutline /> Like
          </button>
        </div>
        <img
          src={image}
          className="w-full h-[350px] my-4"
          alt=""
        />
        <div className="space-y-5 border-t pt-5">
          <p>{description}</p>
          <ul className="pl-6" style={{ listStyleType: "disc" }}>
            <p className="font-semibold mb-2">Features</p>
            {
                features.map((index) =>  <li key={index}>{index}</li>)
            }
          </ul>
          <div className="flex items-center gap-8 border-t pt-5">
            <a
              href={live}
              className="btn btn-neutral px-8"
              target="_blank"
            >
              <IoLink className="text-xl" /> Live
            </a>
            <a
              target="_black"
              href={gitRepo}
              className="btn btn-outline px-8"
            >
              <RiGitRepositoryLine className="text-xl" /> Clinet Repo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
