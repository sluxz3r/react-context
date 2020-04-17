import React, { useState } from "react";
import "../../Assets/Css/App.css";

const ModalR = () => {
  const [open, setOpen] = useState(false);
  let modal = document.getElementById("modal-id");

  const _handleOpen = () => {
    modal && modal.classList.remove("fadeOut");
    modal && modal.classList.add("fadeIn");
    setOpen(true);
  };

  const _handleClose = () => {
    modal && modal.classList.remove("fadeIn");
    modal && modal.classList.add("fadeOut");
    setOpen(false);
  };

  return (
    <div>
      <div>
        <button
          onClick={_handleOpen}
          className="bg-blue-500 text-white p-2 rounded text-2xl font-bold hover:bg-blue-700"
        >
          Open Modal
        </button>
      </div>

      <div
        id="modal-id"
        className={`${
          open === false ? "hidden" : ""
        } main-modal flex bg-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster`}
      >
        <div className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Header</p>
              <div onClick={_handleClose} className="cursor-pointer z-50">
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>
            <div className="my-5">
              <p>
                Inliberali Persius Multi iustitia pronuntiaret expeteretur sanos
                didicisset laus angusti ferrentur arbitrium arbitramur huic
                desiderent.?
              </p>
            </div>
            <div className="flex justify-end pt-2">
              <button
                onClick={_handleClose}
                className="focus:outline-none px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
              >
                Cancel
              </button>
              <button className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalR;
