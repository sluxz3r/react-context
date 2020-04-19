import React, { useState, useContext, Fragment } from "react";
import history from "../../../../App/Misc/BrowserHistory";
import { getToken, removeAuthCredential } from "../../../Misc/Cookies";
import "../../../../App/Container/Assets/Css/App.css";
import { LoginContext } from "../Sidebar/Controller";
import { Modal } from "../../../Container/Components/Modal/Modal";
import { useForm } from "react-hook-form";
import ClickAwayListener from "react-click-away-listener";
import logo from "../../../Container/Assets/Images/logo_pindad.png";

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
  const [openHamburger, setOpenHamburger] = useState(false);
  const _handleOpenHamburger = () => setOpenHamburger(!openHamburger);
  const _handleCloseHamburger = () => setOpenHamburger(false);

  const _openModalHandler = () => {
    setOpen(true);
    _handleClickAway();
    _handleCloseHamburger();
  };

  const _closeModalHandler = () => {
    setOpen(false);
  };

  const _handleClickAway = () => {
    setOpenProcedure(false);
    setOpenGuidance(false);
    setOpenAnnoucement(false);
    setOpenLanguage(false);
    setOpenOptions(false);
  };

  const Login = () => {
    const { _handleLogin } = useContext(LoginContext);
    const { register, handleSubmit, errors } = useForm({
      mode: "onChange",
    });

    const _handleForgotPassword = () => {
      history.push("/forgot");
      setOpen(false);
    };
    const _handleRegistration = () => {
      history.push("/registration");
      setOpen(false);
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
          Atau,
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

  return (
    <nav className="bg-bluepindad-100 w-full items-center justify-between border-b-6 border-yellowpindad-100 fixed overflow-hidden z-10 top-0 left-0 right-0">
      <ClickAwayListener onClickAway={_handleClickAway}>
        <div className="w-full flex flex-wrap justify-between">
          <div className="flex">
            <span
              onClick={() => {
                _handleClickAway();
                _handleCloseHamburger();
                _handleHomeMenu();
              }}
              className="cursor-pointer inline-block flex flex-row px-4"
            >
              <img src={logo} width="60" alt="Logo" className="py-2" />
            </span>
            <div
              className="cursor-pointer hover:bg-bluepindad-200 flex items-center flex-shrink-0 text-white px-4"
              onClick={() => history.push("/")}
            >
              <span
                onClick={() => {
                  _handleClickAway();
                  _handleCloseHamburger();
                  _handleHomeMenu();
                }}
                className="font-bold text-lg sm:text-sm tracking-tight"
              >
                e-Procurements
              </span>
            </div>
          </div>
          <div className="block lg:hidden p-2">
            <div
              onClick={_handleOpenHamburger}
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            >
              {!openHamburger ? (
                <svg
                  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              ) : (
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352 512"
                >
                  <path
                    fill="currentColor"
                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                  ></path>
                </svg>
              )}
            </div>
          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
              !openHamburger ? "hidden" : ""
            }`}
          >
            <div className="text-sm lg:flex-grow">
              <div
                className="cursor-pointer hover:bg-bluepindad-200 block lg:inline-block text-sm px-4 py-5 leading-none text-white lg:mt-0"
                onClick={() => {
                  _handleClickAway();
                  _handleCloseHamburger();
                  history.push("/");
                }}
              >
                Beranda
              </div>
              <div
                className="cursor-pointer hover:bg-bluepindad-200 w-full md:w-full lg:w-auto block lg:inline-block border-none text-sm leading-none text-white lg:mt-0"
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
                    className={`flex flex-col text-sm shadow-lg lg:border lg:border-gray-300 w-options bg-white text-left static md:static lg:absolute text-black top-options  rounded ${
                      !openGuidance && "hidden"
                    }`}
                  >
                    <div
                      className="cursor-pointer hover:bg-gray-300 py-2 px-4"
                      onClick={() => {
                        _handleCloseHamburger();
                        history.push("/user_manual");
                      }}
                    >
                      User Manual
                    </div>
                    <div
                      className="cursor-pointer hover:bg-gray-300 py-2 px-4"
                      onClick={() => {
                        _handleCloseHamburger();
                        history.push("/integrity_pact");
                      }}
                    >
                      Integrity Pack
                    </div>
                    <div
                      className="cursor-pointer hover:bg-gray-300 py-2 px-4"
                      onClick={() => {
                        _handleCloseHamburger();
                        history.push("/term_condition");
                      }}
                    >
                      Syarat Ketentuan
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="cursor-pointer hover:bg-bluepindad-200 focus:bg-bluepindad-200 w-full md:w-full lg:w-auto block lg:inline-block border-none text-sm leading-none text-white lg:mt-0"
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
                    className={`flex flex-col text-sm shadow-lg lg:border lg:border-gray-300 w-options bg-white text-left static md:static lg:absolute text-black top-options  rounded ${
                      !openProcedure && "hidden"
                    }`}
                  >
                    <div
                      className="cursor-pointer hover:bg-gray-300 py-2 px-4"
                      onClick={() => {
                        _handleCloseHamburger();
                        history.push("/registration_procedure");
                      }}
                    >
                      Prosedur Registrasi
                    </div>
                    <div
                      className="cursor-pointer hover:bg-gray-300 py-2 px-4"
                      onClick={() => {
                        _handleCloseHamburger();
                        history.push("/qualification_requirement");
                      }}
                    >
                      Persyaratan Kualifikasi
                    </div>
                    <div
                      className="cursor-pointer hover:bg-gray-300 py-2 px-4"
                      onClick={() => {
                        _handleCloseHamburger();
                        history.push("/tender_requirement");
                      }}
                    >
                      Persyaratan Pembelian
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="cursor-pointer hover:bg-bluepindad-200 w-full md:w-full lg:w-auto block lg:inline-block border-none text-sm leading-none text-white lg:mt-0"
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
                    className={`flex flex-col text-sm shadow-lg lg:border lg:border-gray-300 w-options bg-white text-left static md:static lg:absolute text-black top-options  rounded ${
                      !openAnnouncement && "hidden"
                    }`}
                  >
                    <div
                      className="cursor-pointer hover:bg-gray-300 py-2 px-4"
                      onClick={() => {
                        _handleCloseHamburger();
                        history.push("/procurements");
                      }}
                    >
                      Lelang
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="cursor-pointer hover:bg-bluepindad-200 block lg:inline-block text-sm px-4 py-5 leading-none text-white lg:mt-0"
                onClick={() => {
                  _handleClickAway();
                  _handleCloseHamburger();
                  _handleContact();
                }}
              >
                Kontak
              </div>
            </div>
            <div className="md:mr-6 lg:mr-6">
              <div
                className="cursor-pointer hover:bg-bluepindad-200 w-full md:w-full lg:w-auto block lg:inline-block border-none text-sm leading-none text-white lg:mt-0"
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
                  <div
                    className={`flex flex-col text-sm shadow-lg lg:border lg:border-gray-300 w-options bg-white text-left static md:static lg:absolute text-black top-options left-language rounded ${
                      !openLanguage && "hidden"
                    }`}
                  >
                    <div
                      className="cursor-pointer border-b border-gray-300 hover:bg-gray-300 py-2 px-4"
                      onClick={() => {
                        _handleCloseHamburger();
                        history.push("/");
                      }}
                    >
                      English
                    </div>
                    <div
                      className="cursor-pointer hover:bg-gray-300 py-2 px-4"
                      onClick={() => {
                        _handleCloseHamburger();
                        history.push("/");
                      }}
                    >
                      Bahasa
                    </div>
                  </div>
                </div>
              </div>
              {token === null && (
                <Fragment>
                  <div
                    className="cursor-pointer hover:bg-bluepindad-200 block lg:inline-block text-sm px-4 py-5 leading-none text-white lg:mt-0"
                    onClick={() => {
                      _handleClickAway();
                      _handleCloseHamburger();
                      _handleRegistration();
                    }}
                  >
                    Registrasi
                  </div>
                  <div className="cursor block xl:px-0 px-2 lg:px-4 mb-4 lg:mb-0 mx-2 lg:inline-block text-sm rounded lg:border lg:border-gray-700 leading-none text-white lg:mt-0">
                    <button
                      onClick={_openModalHandler}
                      className="bg-blue-600 py-2 px-4 hover:bg-blue-700"
                    >
                      Login
                    </button>
                  </div>
                </Fragment>
              )}
              {token !== null && (
                <Fragment>
                  <div
                    className="cursor-pointer hover:bg-bluepindad-200 w-full md:w-full lg:w-auto block lg:inline-block border-none text-sm leading-none text-white lg:mt-0"
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
                </Fragment>
              )}
            </div>
            <div
              className={`flex flex-col text-sm shadow-lg lg:border lg:border-gray-300 w-options bg-white text-left static md:static lg:absolute text-black top-options left-options rounded ${
                !openOptions ? "hidden" : ""
              }`}
            >
              <div
                className="cursor-pointer font-bold hover:bg-gray-300 py-2 px-4"
                onClick={() => {
                  _handleCloseHamburger();
                  _handleClickAway();
                  history.push("/");
                }}
              >
                Username
              </div>
              <div
                className="cursor-pointer border-t border-b border-gray-300 hover:bg-gray-300 py-2 px-4"
                onClick={() => {
                  _handleCloseHamburger();
                  _handleClickAway();
                  history.push("/");
                }}
              >
                Ganti Password
              </div>
              <div
                className="cursor-pointer hover:bg-gray-300 py-2 px-4"
                onClick={() => {
                  _handleCloseHamburger();
                  _handleClickAway();
                  _handleLogout();
                }}
              >
                Keluar
              </div>
            </div>
          </div>
        </div>
        <Modal
          title="Login"
          open={open}
          onClose={_closeModalHandler}
          onActionOne={_closeModalHandler}
          textOne="Cancel"
          width="w-4/5 lg:w-1/4"
        >
          <Login />
        </Modal>
      </ClickAwayListener>
    </nav>
  );
};
