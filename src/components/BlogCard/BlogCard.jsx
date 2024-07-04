import { BiDetail } from "react-icons/bi";
const BlogCard = ({ blog }) => {
  const { name, image, description, shortDescription, author } = blog;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="rounded-ee-[58%]" />
      </figure>
      <div className="card-body">
        <hr />
        <h2 className="text-xl mt-3 mb-2">~ {name}</h2>
        <p className="text-sm font-light leading-7">{shortDescription}</p>
        <div className="card-actions justify-end mt-8">
          <button className="btn btn-outline px-8">
            <BiDetail /> More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
