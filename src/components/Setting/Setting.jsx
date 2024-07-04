import { IoClose } from "react-icons/io5";
import Working from "../Working/Working";
const Setting = ({ setOpen }) => {
  return (
    <>
      <button className="btn">open modal</button>
      <dialog id="setting" className="modal">
        <div className="modal-box max-w-3xl">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Setting</h3>
            <form method="dialog" onClick={() => setOpen(false)}>
              <button className="btn btn-ghost btn-circle">
                <IoClose className="text-xl" />
              </button>
            </form>
          </div>
          <Working/>
        </div>
      </dialog>
    </>
  );
};

export default Setting;
