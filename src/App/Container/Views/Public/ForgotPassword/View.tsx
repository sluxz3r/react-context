import React from "react";
import { MainApp } from "../../../Components/index";

export const Forgot = () => {
  return (
    <MainApp title="RESET PASSWORD">
      <div className="flex">
        <div className="w-2/5">
          <div className="text-2xl mb-8"> Reset Password</div>
          <div className="text-xs text-blue-600 mb-2">
            Tolong masukan username yang digunakan untuk account Anda
          </div>
          <form action="">
            <input
              type="text"
              className="border-2 p-2 w-full mb-2"
              placeholder="username"
              style={{ fontSize: "16px" }}
            />
            <input
              type="button"
              value="Kirimkan saya tata cara mengganti password"
              className="w-full text-xs py-2 cursor-pointer bg-blue-400 text-white font-semibold mb-3"
            />
          </form>
        </div>
        <div className="w-3/5 pl-6">
          <div className="mb-2">
            Aturan Password User ID EProcurement PT. PINDAD (Persero) adalah
            sebagai berikut :
          </div>
          <div className='pl-6'>
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
            <p>Pengguna dapat mengganti password sesuai dengan keinginannya, dan menjaganya agar selalu bersifat rahasia</p>
          </div>
          <div className="flex text-xs">
            <p>5.</p>
            <p>Setiap penyalahgunaan hak akses oleh pihak lain menjadi tanggung jawab pemilik User ID dan password</p>
          </div>
          </div>
        </div>
      </div>
    </MainApp>
  );
};
