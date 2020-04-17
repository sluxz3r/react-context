import React, { useState } from "react";
import history from "../../../../App/Misc/BrowserHistory";
import { getToken, removeAuthCredential } from "../../../Misc/Cookies";
import "../../../../App/Container/Assets/Css/App.css";

export const PublicHeader = () => {
  const token: any = getToken();
  const _handleLogout = () => {
    removeAuthCredential();
    window.location.reload();
  };
  const _handleHomeMenu = () => {
    history.push("/");
  };
  const _handleRegistration = () => {
    history.push("/registration");
  };
  const _handleContact = () => {
    history.push("/contact");
  };
  const [openGuidance, setOpenGuidance] = useState(false);

  const handleOpenGuidance = () => {
    setOpenGuidance(!openGuidance);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-bluepindad-100 border-b-6 border-yellowpindad-100 py-0 px-6 fixed w-full z-10 top-0 left-0 right-0 overflow-hidden">
      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block text-sm lg:pt-0 cursor-pointer"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-start flex-2 items-center">
          <li>
            <span className="inline-block px-8 text-white font-bold">Logo</span>
          </li>
          <li>
            <span
              onClick={() => _handleHomeMenu()}
              className="inline-block p-4 text-white font-bold hover:bg-bluepindad-200"
            >
              e-Procurement
            </span>
          </li>
          <li>
            <span
              onClick={() => _handleHomeMenu()}
              className="inline-block p-4 text-white text-xs hover:bg-bluepindad-200"
            >
              Beranda
            </span>
          </li>
          <li>
            {/* <span className="inline-block p-4 text-white text-xs hover:bg-bluepindad-200">
              Panduan
            </span> */}
            <div
              className="cursor-pointer w-full md:w-full lg:w-auto block lg:inline-block border-none text-sm leading-none text-white hover:bg-blue-800 lg:mt-0"
              onClick={handleOpenGuidance}
            >
              <div className="flex flex-col">
                <div className="flex flex-row items-center pl-4 pr-2 py-5">
                  <span>Panduan</span>
                  {!openGuidance ? (
                    <svg
                      className="fill-current h-4 w-4 mr-2 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="fill-current h-4 w-4 mr-2 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                      ></path>
                    </svg>
                  )}
                </div>
                <div
                  className={`flex flex-col w-options lg:bg-white text-left static md:static lg:absolute text-white lg:text-black top-options  rounded ${
                    !openGuidance && "hidden"
                  }`}
                >
                  <div
                    className="cursor-pointer hover:bg-gray-400 sm:hover:bg-gray-400 md:hover:bg-gray-400 py-2 px-4"
                    onClick={() => history.push("/user_manual")}
                  >
                    User Manual
                  </div>
                  <div
                    className="cursor-pointer hover:bg-gray-400 py-2 px-4"
                    onClick={() => history.push("/integrity_pact")}
                  >
                    Integrity Pack
                  </div>
                  <div
                    className="cursor-pointer hover:bg-gray-400 py-2 px-4"
                    onClick={() => history.push("/term_condition")}
                  >
                    Syarat Ketentuan
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <span className="inline-block p-4 text-white text-xs hover:bg-bluepindad-200">
              Prosedur
            </span>
          </li>
          <li>
            <span className="inline-block p-4 text-white text-xs hover:bg-bluepindad-200">
              Pengumuman
            </span>
          </li>
          <li>
            <span
              onClick={() => _handleContact()}
              className="inline-block p-4 text-white text-xs hover:bg-bluepindad-200"
            >
              Kontak
            </span>
          </li>
        </ul>
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li>
            <span className="inline-block p-4 text-white text-xs font-bold hover:bg-bluepindad-200">
              Bahasa
            </span>
          </li>
          {token === null && (
            <React.Fragment>
              <li>
                <span
                  onClick={() => _handleRegistration()}
                  className="inline-block p-4 text-white text-xs hover:bg-bluepindad-200"
                >
                  Registrasi
                </span>
              </li>
              <li>
                <span className="inline-block px-4 text-white text-xs">
                  <button className="bg-blue-600 py-1 px-4 hover:bg-blue-700">
                    Login
                  </button>
                </span>
              </li>
            </React.Fragment>
          )}
          {token !== null && (
            <li>
              <span
                onClick={() => _handleLogout()}
                className="inline-block px-4 text-white text-xs"
              >
                User Test
              </span>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
