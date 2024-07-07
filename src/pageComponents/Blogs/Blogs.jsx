import BlogCard from "../../components/BlogCard/BlogCard";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      name: "blog number 1",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiis",
      postDate: "11/09/2024",
      postTime: "09.00am",
      author: "anonymouse",
    },
    {
      id: 1,
      name: "blog number 2",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiisLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis explicabo officiis",
      postDate: "31/09/2024",
      postTime: "02.00am",
      author: "anonymouse 2",
    },
  ];
  return (
    <div className="flex flex-col gap-12 items-center p-5">
      <div className="text-center mx-auto space-y-3">
        <h1 className="text-4xl">My Blogs</h1>
        <p className="w-3/5 text-center mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          obcaecati quasi quidem perferendis facere aliquid omnis nesciunt nobis
          explicabo officiis?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
