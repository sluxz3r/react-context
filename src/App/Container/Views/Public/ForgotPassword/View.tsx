import React, { useContext } from "react";
import { MainApp } from "../../../Components/index";
import { useForm } from "react-hook-form";
import { ForgotController, ForgotContext } from "./Controller";

const ForgotInput = () => {
  const { _handleSubmitForgot, error,data, showSuccess,showError } = useContext(ForgotContext);
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });
  return (
    <div className="lg:w-2/5">
      <div className="text-2xl mb-8"> Reset Password</div>
      <div className="text-xs text-blue-600 mb-2">
        Tolong masukan username yang digunakan untuk account Anda
      </div>
      {showError && (
        <p className="text-red-600 text-xs italic mb-2">{error}</p>
      )}
        {showSuccess && (
        <p className="text-green-600 text-xs italic mb-2">{data.RequestForgotPassword}</p>
      )}
      <form onSubmit={handleSubmit((data) => _handleSubmitForgot(data))}>
        <input
          type="text"
          name="username"
          autoComplete="off"
          className="border-2 p-2 w-full mb-2"
          placeholder="username"
          style={{ fontSize: "16px" }}
          ref={register({ required: true, minLength: 4, maxLength: 16 })}
        />
        {errors.username && (
          <p className="text-red-600 text-xs italic mb-2">
            Username harus 4 s/d 16 huruf.
          </p>
        )}
        <button
          type="submit"
          className="w-full text-xs py-2 cursor-pointer bg-blue-400 text-white font-semibold mb-3"
        >
          Kirimkan saya tata cara mengganti password
        </button>
      </form>
    </div>
  );
};

const ForgotRules = () => {
  return (
    <div className="lg:w-3/5 lg:pl-6">
      <div className="mb-2">
        Aturan Password User ID EProcurement PT. PINDAD (Persero) adalah sebagai
        berikut :
      </div>
      <div className="pl-6">
        <div className="flex text-xs">
          <p>1.</p>
          <p>Password harus terdiri dari kombinasi Angka & Huruf</p>
        </div>
        <div className="flex text-xs">
          <p>2.</p>
          <p>Password minimum harus terdiri dari -> 8 Karakter</p>
        </div>
        <div className="flex text-xs">
          <p>3.</p>
          <p>Spasi tidak diperkenankan</p>
        </div>
        <div className="flex text-xs">
          <p>4.</p>
          <p>
            Pengguna dapat mengganti password sesuai dengan keinginannya, dan
            menjaganya agar selalu bersifat rahasia
          </p>
        </div>
        <div className="flex text-xs">
          <p>5.</p>
          <p>
            Setiap penyalahgunaan hak akses oleh pihak lain menjadi tanggung
            jawab pemilik User ID dan password
          </p>
        </div>
      </div>
    </div>
  );
};
export const Forgot = () => {
  return (
    <ForgotController>
      <MainApp title="RESET PASSWORD">
        <div className="lg:flex">
          <ForgotInput />
          <ForgotRules />
        </div>
      </MainApp>
    </ForgotController>
  );
};
