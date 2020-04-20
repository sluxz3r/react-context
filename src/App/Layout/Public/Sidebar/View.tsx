import React, { useContext } from "react";
import history from "../../../../App/Misc/BrowserHistory";
import { LoginController, LoginContext } from "./Controller";
import { useForm } from "react-hook-form";
import { Assets } from "../../../Container/Assets/index";

const Login = () => {
  const {
    _handleLogin,
    errorMessage,
    showError,
    loadingLogin,
    showPassword,
    setShowPassword,
  } = useContext(LoginContext);
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
    <div className="h-full">
      {showError && (
        <div className="w-full bg-red-200 text-red-700 text-xs p-4">
          {errorMessage}
        </div>
      )}
      <div className="p-3 h-full">
        <form onSubmit={handleSubmit((data) => _handleLogin(data))}>
          <input
            disabled={loadingLogin}
            type="text"
            name="username"
            className={`border-2 w-full px-2 py-1 text-sm block ${
              errors.username ? "mb-0" : "mb-3"
            }`}
            placeholder="username"
            style={{ fontSize: "12px" }}
            ref={register({ required: true, minLength: 4, maxLength: 16 })}
            autoComplete="off"
          />
          {errors.username && (
            <p
              className="text-red-600 italic mb-3"
              style={{ fontSize: "10px" }}
            >
              Username harus terdiri dari 4 karakter.
            </p>
          )}
          <div className="flex">
            <input
              disabled={loadingLogin}
              type={showPassword ? "text" : "password"}
              name="password"
              className="border-2 w-full px-2 py-1 text-sm block"
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
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="p-2 bg-gray-300 cursor-pointer"
            >
              {showPassword ? (
                <img
                  src={Assets.hide}
                  alt="show"
                  width="22px"
                  className="bg-gray-300"
                />
              ) : (
                <img
                  src={Assets.show}
                  alt="show"
                  width="22px"
                  className="bg-gray-300"
                />
              )}
            </div>
          </div>
          {errors.password && (
            <p
              className="text-red-600 italic mb-3"
              style={{ fontSize: "10px" }}
            >
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
          {!loadingLogin && (
            <button
              type="submit"
              className="w-full text-xs py-1 cursor-pointer bg-green-400 text-white font-semibold mb-3"
            >
              Masuk
            </button>
          )}
          {loadingLogin && (
            <button
              disabled={true}
              className="w-full text-xs py-1 cursor-pointer bg-green-600 text-white font-semibold mb-3"
            >
              loading...
            </button>
          )}
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
          <hr className="border" />
          <div className="w-full text-center text-gray-700 py-5" style={{ fontSize: "10px" }}>
            <p className="font-semibold">Supported Browser</p>
            <p>
              Chrome, Firefox, IE9, Opera, Safari, dan mobile browser terkini
              Dengan resolusi minimal: 1024 × 768
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export const PublicSidebar = () => {
  return (
    <LoginController>
      <div className="lg:w-64 h-full sm:w-full">
        <table className="w-full h-full">
          <thead className="w-full border-b-2 border-r-2 bg-gray-200">
            <tr>
              <td className="text-left py-2 pl-5 text-gray-600 text-sm font-semibold">
                LOGIN
              </td>
            </tr>
          </thead>
          <tbody className="w-full h-full border-r-2 bg-white">
            <tr>
              <td className="text-left w-full h-full">
                <Login />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </LoginController>
  );
};
