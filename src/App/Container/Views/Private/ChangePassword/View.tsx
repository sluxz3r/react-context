import React, { useContext } from "react";
import { MainApp } from "../../../Components/index";
import { useForm } from "react-hook-form";
import { ChangePasswordController, ChangePasswordContext } from "./Controller";
const FormChangePassword = () => {
  const {
    currentPassword,
    setCurrentPassword,
    newPassword,
    setNewPassword,
    confirmNewPassword,
    setConfirmNewPassword,
  } = useContext(ChangePasswordContext);
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });
  const _handleResetPassword = (data) => {
    console.log(data);
  };
  console.log('CURRENT PASSWORD', currentPassword);
  console.log('NEW PASSWORD', newPassword);
  
  return (
    <div className="lg:w-1/2 text-xs text-gray-800 mb-6">
      <form onSubmit={handleSubmit((data) => _handleResetPassword(data))}>
        <div className="w-full flex flex-row">
          <div className="w-2/5 text-right pr-6 py-1 font-semibold">
            Password Saat Ini
          </div>
          <div className="w-3/5 px-2">
            <input
              type="password"
              name="currentPassword"
              autoComplete="off"
              defaultValue={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className={`border-2 py-1 px-2 w-full ${
                errors.currentPassword ? "mb-0" : "mb-2"
              }`}
              placeholder="Password Saat Ini"
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
            />
            {errors.currentPassword && (
              <p
                className="text-red-600 italic mb-2"
                style={{ fontSize: "8pt" }}
              >
                Password harus 8 karakter, kombinasi Angka & Huruf.
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex flex-row">
          <div className="w-2/5 text-right pr-6 py-1 font-semibold">
            Password Baru
          </div>
          <div className="w-3/5 px-2">
            <input
              type="password"
              name="newPassword"
              autoComplete="off"
              defaultValue={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={`border-2 py-1 px-2 w-full ${
                errors.newPassword ? "mb-0" : "mb-2"
              }`}
              placeholder="Password Baru"
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
            />
            {errors.newPassword && (
              <p
                className="text-red-600 italic mb-2"
                style={{ fontSize: "8pt" }}
              >
                Password harus 8 karakter, kombinasi Angka & Huruf.
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex flex-row">
          <div className="w-2/5 text-right pr-6 py-1 font-semibold">
            Konfirmasi Password Baru
          </div>
          <div className="w-3/5 px-2">
            <input
              type="password"
              name="confirmNewPassword"
              autoComplete="off"
              defaultValue={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className={`border-2 py-1 px-2 w-full ${
                errors.confirmNewPassword ? "mb-0" : "mb-2"
              }`}
              placeholder="Konfirmasi Password Baru"
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
            />
            {errors.confirmNewPassword && (
              <p
                className="text-red-600 italic mb-2"
                style={{ fontSize: "8pt" }}
              >
                Password harus 8 karakter, kombinasi Angka & Huruf.
              </p>
            )}
                {!errors.confirmNewPassword && (newPassword !== confirmNewPassword && confirmNewPassword.length > 0) && (
              <p
                className="text-red-600 italic mb-2"
                style={{ fontSize: "8pt" }}
              >
               Password baru anda tidak sama.
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex flex-row">
          <div className="w-2/5 text-right pr-6 py-1 font-semibold"></div>
          <div className="w-3/5 px-2">
            <button type="submit" className="bg-blue-400 py-1 px-4 text-white">
              Perbarui
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const PasswordRules = () => {
  return (
    <div className="lg:w-3/5 lg:pl-6 text-justify">
      <div className="mb-2">
        Aturan Password User ID EProcurement PT. PINDAD (Persero) adalah sebagai
        berikut :
      </div>
      <div className="pl-6">
        <div className="flex text-xs">
          <p>1.</p>
          <p className="pl-2">
            Password harus terdiri dari kombinasi Angka & Huruf
          </p>
        </div>
        <div className="flex text-xs">
          <p>2.</p>
          <p className="pl-2">
            Password minimum harus terdiri dari -> 8 Karakter
          </p>
        </div>
        <div className="flex text-xs">
          <p>3.</p>
          <p className="pl-2">Spasi tidak diperkenankan</p>
        </div>
        <div className="flex text-xs">
          <p>4.</p>
          <p className="pl-2">
            Pengguna dapat mengganti password sesuai dengan keinginannya, dan
            menjaganya agar selalu bersifat rahasia
          </p>
        </div>
        <div className="flex text-xs">
          <p>5.</p>
          <p className="pl-2">
            Setiap penyalahgunaan hak akses oleh pihak lain menjadi tanggung
            jawab pemilik User ID dan password
          </p>
        </div>
      </div>
    </div>
  );
};
export const ChangePassword = () => {
  return (
    <ChangePasswordController>
      <MainApp title="UBAH PASSWORD">
        <div className="w-full lg:flex lg:flex-row">
          <FormChangePassword />
          <PasswordRules />
        </div>
      </MainApp>
    </ChangePasswordController>
  );
};
