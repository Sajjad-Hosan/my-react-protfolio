const SkillSection = () => {
  const skills = [
    {
      name: "html",
      img:"https://i.ibb.co/qR0P5L2/html-5.png"
    },
    {
      name: "css",
      img:"https://i.ibb.co/Q9vKQ5f/css-3.png"
    },
    {
      name: "javaScript",
      img:"https://i.ibb.co/9mD4Js3/js.png"
    },
    {
      name: "react",
      img:"https://i.ibb.co/wMmy9jX/react.png"
    },
    {
      name: "tailwind",
      img:"https://i.ibb.co/DQwCpPs/tailwind.png"
    },
    {
      name: "express.js",
      img:"https://i.ibb.co/jTFK3yM/express.png"
    },
    {
      name: "firebase",
      img:"https://i.ibb.co/qsfpVLB/firebase.png"
    },
    {
      name: "node js",
      img:"https://i.ibb.co/Q92TJtq/node.png"
    },
    {
      name: "mongodb",
      img:"https://i.ibb.co/k5d877Z/mongodb.png"
    },
  ];
  return (
    <div className="p-10 md:p-20 flex flex-col justify-between items-center gap-16 bg-[#f1f1f1] rounded-ss-full mt-10">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">What i know ?</h1>
        <p className="text-lg font-light md:w-[85%] text-center mx-auto">
          I am a junior frontend developer with a passion for designing and
          developing web applications.
        </p>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map(({ name, img }) => (
          <div
            key={name}
            className="card w-full h-32 bg-base-100 text-4xl flex flex-col justify-center items-center rounded-ss-[60px] rounded-ee-[70px] shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-90 skillCard"
          >
            <div className="h-16 w-16 skillImg tooltip" data-tip={name}>
              <img className="w-full h-full" src={img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
