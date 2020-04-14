import React from "react";
export const PublicHeader = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-bluepindad-100 border-b-6 border-yellowpindad-100 py-0 px-6 fixed w-full z-10 top-0">
      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block text-sm lg:pt-0 cursor-pointer"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-start flex-2 items-center">
          <li>
            <span className="inline-block px-8 text-white font-bold">
             Logo
            </span>
          </li>
          <li>
            <span className="inline-block p-4 text-white font-bold hover:bg-bluepindad-200">
              e-Procurement
            </span>
          </li>
          <li>
            <span className="inline-block p-4 text-white text-xs hover:bg-bluepindad-200">
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
            <span className="inline-block p-4 text-white text-xs hover:bg-bluepindad-200">
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
          <li>
            <span className="inline-block p-4 text-white text-xs hover:bg-bluepindad-200">
              Registrasi
            </span>
          </li>
          <li>
            <span className="inline-block p-4 text-white text-xs hover:bg-bluepindad-200">
              Login
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};
