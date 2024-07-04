import { RiRoadMapLine } from "react-icons/ri";
import { IoAlarmOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";


const Contact = () => {
  const contacObj = [
    {
      icon: <RiRoadMapLine className="text-3xl" />,
      title: "Location",
      text: "Nilphamari, Rangpur, Bangladesh",
    },
    {
      icon: <IoAlarmOutline className="text-3xl" />,
      title: "Available Time",
      text: "Monday - Saturday",
      time: "9:00am - 8:00pm",
    },
    {
      icon: <CiMobile3 className="text-3xl" />,
      title: "Phone",
      text: "Email me get Number",
    },
    {
      icon: <HiOutlineMail className="text-3xl" />,
      title: "Email",
      text: "s4jj4dh034n@gamil.com",
    },
  ];
  return (
    <div className="p-5 flex flex-col md:flex-row justify-center gap-10 md:gap-28 items-center">
      <div className="md:w-1/2 grid grid-cols-2 gap-2">
        {contacObj.map(({ icon, title, text, time }, i) => (
          <div
            key={i}
            className={`w-full h-44 p-7 space-y-3 ${
              i == 1
                ? "border-l"
                : i == 2
                ? "border-r"
                : i == 3
                ? "border-t"
                : "border-b"
            }`}
          >
            {icon}
            <h1 className="text-xl">{title}</h1>
            <p className="text-sm">{text}</p>
            {time && <p className="text-sm">{time}</p>}
          </div>
        ))}
      </div>
      <div className="md:w-1/2 p-9">
        <h1 className="text-2xl mb-8 font-bold">Stay in Touch</h1>
        <form className="card w-full h-full space-y-5 p-2">
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Your email"
            className="input input-bordered w-full"
          />
          <textarea
            className="textarea textarea-bordered"
            placeholder="Message"
            rows={6}
          ></textarea>
          <div className="">
            <button className="btn btn-outline px-8" type="submit">
              <BiMailSend className="text-xl"/> Send Msg
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
