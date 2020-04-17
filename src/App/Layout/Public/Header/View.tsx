import React from "react";
import history from "../../../../App/Misc/BrowserHistory";
import { getToken, removeAuthCredential } from "../../../Misc/Cookies";

export const PublicHeader = () => {
  const token: any = getToken();
  const _handleLogout = () => {
    removeAuthCredential();
    window.location.reload();
  };

  const _handleClickMenu = (e) => {
    if (!e.isDropdown) {
      history.push(e.path)
    }
  }
  const menuLeft: any = [
    {
      id:1,
      title: " e-Procurement",
      path: "/",
      isDropdown: false,
    },
    {
      id:2,
      title: "Beranda",
      path: "/",
      isDropdown: false,
    },
    {
      id:3,
      title: "Panduan",
      isDropdown: true,
    },
    {
      id:4,
      title: "Prosedur",
      isDropdown: true,
    },
    {
      id:5,
      title: "Pengumuman",
      isDropdown: true,
    },
    {
      id:6,
      title: "Kontak",
      path: "/contact",
      isDropdown: false,
    },
  ];

  const menuRight: any = [
    {
      id:7,
      title: "Registrasi",
      path: "/registration",
      isDropdown: false,
    },
  ]

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
          {menuLeft.map((e, i) => (
            <li key={i}>
              <span onClick={() => _handleClickMenu(e)} className={`${e.id === 1 && 'font-bold'} inline-block p-4 text-white text-xs hover:bg-bluepindad-200`}>
                {e.title}
              </span>
            </li>
          ))}
        </ul>
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li>
            <span className="inline-block p-4 text-white text-xs font-bold hover:bg-bluepindad-200">
              Bahasa
            </span>
          </li>
          {token === null && (
            <React.Fragment>
              {menuRight.map((e,i) => 
              <li key={i}>
                <span
                  onClick={() => _handleClickMenu(e)}
                  className="inline-block p-4 text-white text-xs hover:bg-bluepindad-200"
                >
                  {e.title}
                </span>
              </li>
              )}
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
