import React, { useState, useContext } from "react";
import history from "../../../../App/Misc/BrowserHistory";
import { getToken, removeAuthCredential } from "../../../Misc/Cookies";
import "../../../../App/Container/Assets/Css/App.css";
import { LoginContext } from "../Sidebar/Controller";
import { Modal } from "../../../Container/Components/Modal/Modal";
import { useForm } from "react-hook-form";
import ClickAwayListener from "react-click-away-listener";

const Login = () => {
  const { _handleLogin } = useContext(LoginContext);
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });

  const _handleForgotPassword = () => {
    history.push("/forgot");
  };
  const _handleRegistration = () => {
    history.push("/registration");
  };
  return (
    <form
      className="py-2"
      onSubmit={handleSubmit((data) => _handleLogin(data))}
    >
      <input
        type="text"
        name="username"
        className={`border-2 rounded outline-none w-full px-2 py-1 text-sm block ${
          errors.username ? "mb-0 border-red-600" : "mb-3"
        }`}
        placeholder="username"
        style={{ fontSize: "12px" }}
        ref={register({ required: true, minLength: 4, maxLength: 16 })}
        autoComplete="off"
      />
      {errors.username && (
        <p className="text-red-600 italic mb-3" style={{ fontSize: "10px" }}>
          Username harus terdiri dari 4 karakter.
        </p>
      )}
      <input
        type="password"
        name="password"
        className={`border-2 w-full px-2 py-1 rounded outline-none text-sm block ${
          errors.password && "border-red-600"
        }`}
        placeholder="password"
        style={{ fontSize: "12px" }}
        ref={register({
          required: true,
          minLength: 8,
          maxLength: 32,
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
              " Password harus terdiri dari 8 karakter, kombinasi Angka & Huruf.",
          },
        })}
        autoComplete="off"
      />
      {errors.password && (
        <p className="text-red-600 italic mb-3" style={{ fontSize: "10px" }}>
          Password harus terdiri dari 8 karakter, kombinasi Angka & Huruf.
        </p>
      )}
      <div className="flex mt-1 items-center mb-4">
        <input type="checkbox" className="mr-1" />
        <span className="w-1/2 text-gray-700" style={{ fontSize: "10px" }}>
          Ingatkan Saya
        </span>
        <span
          className="w-1/2 text-right text-blue-600 cursor-pointer"
          style={{ fontSize: "10px" }}
          onClick={() => _handleForgotPassword()}
        >
          Lupa Password ?
        </span>
      </div>
      <button
        type="submit"
        className="w-full text-xs py-1 cursor-pointer bg-green-400 text-white font-semibold mb-3"
      >
        Masuk
      </button>
      <div className="text-center mb-5" style={{ fontSize: "10px" }}>
        Atau,{" "}
        <span
          className="text-blue-600 cursor-pointer"
          onClick={() => _handleRegistration()}
          style={{ fontSize: "10px" }}
        >
          Daftar sebagai Penyedia baru
        </span>
      </div>
    </form>
  );
};

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

  const [openProcedure, setOpenProcedure] = useState(false);
  const [openGuidance, setOpenGuidance] = useState(false);
  const [openAnnouncement, setOpenAnnoucement] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const handleOpenProcedure = () => {
    setOpenProcedure(!openProcedure);
    setOpenGuidance(false);
    setOpenAnnoucement(false);
    setOpenLanguage(false);
    setOpenOptions(false);
  };
  const handleOpenGuidance = () => {
    setOpenGuidance(!openGuidance);
    setOpenProcedure(false);
    setOpenAnnoucement(false);
    setOpenLanguage(false);
    setOpenOptions(false);
  };
  const handleOpenAnnouncement = () => {
    setOpenAnnoucement(!openAnnouncement);
    setOpenProcedure(false);
    setOpenGuidance(false);
    setOpenLanguage(false);
    setOpenOptions(false);
  };
  const handleOpenLanguage = () => {
    setOpenLanguage(!openLanguage);
    setOpenProcedure(false);
    setOpenGuidance(false);
    setOpenAnnoucement(false);
    setOpenOptions(false);
  };

  const handleOpenOptions = () => {
    setOpenOptions(!openOptions);
    setOpenProcedure(false);
    setOpenGuidance(false);
    setOpenAnnoucement(false);
    setOpenLanguage(false);
  };

  const [open, setOpen] = useState(false);

  const openModalHandler = () => {
    setOpen(true);
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  const _handleClickAway = () => {
    setOpenProcedure(false);
    setOpenGuidance(false);
    setOpenAnnoucement(false);
    setOpenLanguage(false);
    setOpenOptions(false);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-bluepindad-100 border-b-6 border-yellowpindad-100 py-0 fixed w-full z-10 top-0 left-0 right-0 overflow-hidden">
      <ClickAwayListener onClickAway={_handleClickAway}>
        <div className="w-screen px-6">
          <div
            className="w-full justify-between flex-row lg:flex lg:items-center lg:w-auto hidden lg:block text-sm lg:pt-0 cursor-pointer"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-start flex-2 items-center">
              <li>
                <span className="inline-block px-8 text-white font-bold">
                  Logo
                </span>
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
                      className={`border border-gray-300 shadow-lg flex flex-col w-options lg:bg-white text-left static md:static lg:absolute text-white lg:text-black top-options  rounded ${
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
                <div
                  className="cursor-pointer w-full md:w-full lg:w-auto block lg:inline-block border-none text-sm leading-none text-white  hover:bg-blue-800 lg:mt-0"
                  onClick={handleOpenProcedure}
                >
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center pl-4 pr-2 py-5">
                      <span>Prosedur</span>
                      {!openProcedure ? (
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
                      className={`border border-gray-300 shadow-lg flex flex-col w-options lg:bg-white text-left static md:static lg:absolute text-white lg:text-black top-options  rounded ${
                        !openProcedure && "hidden"
                      }`}
                    >
                      <div
                        className="cursor-pointer hover:bg-gray-400 py-2 px-4"
                        onClick={() => history.push("/registration_procedure")}
                      >
                        Prosedur Registrasi
                      </div>
                      <div
                        className="cursor-pointer hover:bg-gray-400 py-2 px-4"
                        onClick={() =>
                          history.push("/qualification_requirement")
                        }
                      >
                        Persyaratan Kualifikasi
                      </div>
                      <div
                        className="cursor-pointer hover:bg-gray-400 py-2 px-4"
                        onClick={() => history.push("/tender_requirement")}
                      >
                        Persyaratan Pembelian
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="cursor-pointer w-full md:w-full lg:w-auto block lg:inline-block border-none text-sm leading-none text-white  hover:bg-blue-800 lg:mt-0"
                  onClick={handleOpenAnnouncement}
                >
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center pl-4 pr-2 py-5">
                      <span>Pengumuman</span>
                      {!openAnnouncement ? (
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
                      className={`border border-gray-300 shadow-lg flex flex-col w-options lg:bg-white text-left static md:static lg:absolute text-white lg:text-black top-options  rounded ${
                        !openAnnouncement && "hidden"
                      }`}
                    >
                      <div
                        className="cursor-pointer hover:bg-gray-400 py-2 px-4"
                        onClick={() => history.push("/procurements")}
                      >
                        Lelang
                      </div>
                    </div>
                  </div>
                </div>
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
            <ul className="list-reset lg:flex justify-start flex-2 items-center">
              <li>
                <div
                  className="cursor-pointer w-full md:w-full lg:w-auto block lg:inline-block border-none text-sm leading-none text-white  hover:bg-blue-800 lg:mt-0"
                  onClick={handleOpenLanguage}
                >
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center pl-4 pr-2 py-5">
                      <span>Bahasa</span>
                      {!openLanguage ? (
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
                  </div>
                </div>
              </li>
              <div
                className={`border border-gray-300 shadow-lg flex flex-col w-options lg:bg-white text-left static md:static lg:absolute text-white lg:text-black left-language rounded ${
                  !openLanguage && "hidden"
                }`}
              >
                <div
                  className="cursor-pointer border-b border-gray-300 hover:bg-gray-400 py-2 px-4"
                  onClick={() => history.push("/")}
                >
                  English
                </div>
                <div
                  className="cursor-pointer hover:bg-gray-400 py-2 px-4"
                  onClick={() => history.push("/")}
                >
                  Bahasa
                </div>
              </div>
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
                      <button
                        onClick={openModalHandler}
                        className="bg-blue-600 py-1 px-4 hover:bg-blue-700"
                      >
                        Login
                      </button>
                    </span>
                  </li>
                </React.Fragment>
              )}
              {token !== null && (
                <React.Fragment>
                  <li>
                    <div
                      className="cursor-pointer w-full md:w-full lg:w-auto block lg:inline-block border-none text-sm leading-none text-white  hover:bg-blue-800 lg:mt-0"
                      onClick={handleOpenOptions}
                    >
                      <div className="flex flex-col">
                        <div className="flex flex-row items-center pl-4 pr-2 py-5">
                          <span>User Tes</span>
                          {!openOptions ? (
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
                      </div>
                    </div>
                  </li>
                  <div
                    className={`w-40 border border-gray-300 shadow-lg flex flex-col lg:bg-white text-left static md:static lg:absolute text-white lg:text-black border border-gray-300 rounded left-options ${
                      !openOptions ? "hidden" : ""
                    }`}
                  >
                    <div
                      className="cursor-pointer font-bold hover:bg-gray-400 py-2 px-4"
                      onClick={() => history.push("/")}
                    >
                      Username
                    </div>
                    <div
                      className="cursor-pointer border-t border-b border-gray-300 hover:bg-gray-400 py-2 px-4"
                      onClick={() => history.push("/")}
                    >
                      Ganti Password
                    </div>
                    <div
                      className="cursor-pointer hover:bg-gray-400 py-2 px-4"
                      onClick={() => _handleLogout()}
                    >
                      Keluar
                    </div>
                  </div>
                </React.Fragment>
              )}
              <Modal
                title="Login"
                open={open}
                onClose={closeModalHandler}
                onActionOne={closeModalHandler}
                textOne="Cancel"
                width="w-1/4"
              >
                <Login />
              </Modal>
            </ul>
          </div>
        </div>
      </ClickAwayListener>
    </nav>
  );
};
