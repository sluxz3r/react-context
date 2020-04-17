import React from "react";
import "../../Assets/Css/App.css";

interface ModalInterface {
  open: boolean;
  title: string;
  onClose: () => void;
  onActionLeft: () => void;
  onActionRight?: () => void;
  textLeft: string;
  textRight?: string;
  width?: string;
  classNameLeft?: string;
  classNameRight?: string;
  children: any;
}

const ModalR = ({
  onActionRight = () => {},
  textRight = "Cancel",
  classNameLeft = "focus:outline-none bg-blue-600 hover:bg-blue-800 text-white",
  classNameRight = "bg-white hover:bg-gray-300 border border-gray-400 text-gray-800",
  width = "",
  open,
  title,
  onClose,
  onActionLeft,
  textLeft,
  children,
}) => {
  console.log("CEK", onActionRight.toString() === "() => {}");
  return (
    <div>
      <div
        id="modal-id"
        className={`${
          open === false ? "hidden" : ""
        } text-xs flex bg-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster`}
      >
        <div
          className={`${width} md:max-w-md lg:max-w-5xl border border-teal-500 shadow-lg bg-white mx-auto rounded shadow-lg z-50`}
        >
          <div className="py-2 px-4 border-b border-gray-400 bg-primary flex justify-between items-center">
            <p className="text-xl font-bold text-white">{title}</p>
            <div
              title="Close"
              onClick={onClose}
              className="cursor-pointer z-50 text-gray-600 hover:text-gray-800"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>
          <div className="py-2 px-4 overflow-y-auto h-auto max-h-modal">
            {children}
          </div>
          <div className="py-2 px-4 border-t border-gray-400">
            <div className="flex justify-end py-2">
              <button
                onClick={onActionLeft}
                className={`${classNameLeft} py-1 px-4 rounded mr-2`}
              >
                {textLeft}
              </button>
              {textRight && (
                <button
                  onClick={
                    onActionRight.toString() !== "() => {}"
                      ? onActionRight
                      : onClose
                  }
                  className={`${classNameRight} py-1 px-4 rounded ml-2`}
                >
                  {textRight}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalR;
