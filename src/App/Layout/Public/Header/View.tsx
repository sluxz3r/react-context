import React from "react";
import history from "../../../../App/Misc/BrowserHistory";
import { getToken, removeAuthCredential } from "../../../Misc/Cookies";

export const PublicHeader = () => {
  const token: any = getToken();
  const _handleLogout =() => {
    removeAuthCredential()
    window.location.reload()
  }  
  const _handleHomeMenu = () => {
    history.push("/");
  };
  const _handleRegistration = () => {
    history.push("/registration");
  };

  const _handleContact = () => {
    history.push("/contact");
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
            <span className="inline-block p-4 text-white text-xs hover:bg-bluepindad-200">
              Panduan
            </span>
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
          {token !==
            null && (
              <li>
                <span onClick={() => _handleLogout()} className="inline-block px-4 text-white text-xs">
                  User Test
                </span>
              </li>
            )}
        </ul>
      </div>
    </nav>
  );
};
