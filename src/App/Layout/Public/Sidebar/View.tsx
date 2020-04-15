import React from "react";
import history from "../../../../App/Misc/BrowserHistory";

const Login = () => {
  const _handleForgotPassword = () => {
    history.push("/forgot");
  };
  const _handleRegistration = () => {
    history.push("/registration");
  };
  return (
    <div className="p-3 h-full">
      <form>
        <input
          type="text"
          className="border-2 w-full px-2 py-1 text-sm mb-3 block"
          placeholder="username"
          style={{ fontSize: "12px" }}
        />
        <input
          type="password"
          className="border-2 w-full px-2 py-1 text-sm block"
          placeholder="password"
          style={{ fontSize: "12px" }}
        />
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
        <input
          type="button"
          value="Masuk"
          className="w-full text-xs py-1 cursor-pointer bg-green-400 text-white font-semibold mb-3"
        />
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
        <hr className="border"/>
        <div>

        </div>
      </form>
    </div>
  );
};
export const PublicSidebar = () => {
  return (
    <div className="w-full h-full">
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
            <td className="text-left p-2 h-full">
              <Login />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
