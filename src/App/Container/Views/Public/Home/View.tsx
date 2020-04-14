import React from "react";
import { MainApp } from "../../../Components/index";

export const Home = () => {
  return (
    <MainApp title="BERANDA">
      <div className="text-center mb-8 text-gray-800">
        <div className="font-bold text-xl">Selamat Datang</div>
        <div>di</div>
        <div className="font-bold text-xl">
          E-Procurement PT. PINDAD (Persero)
        </div>
      </div>
      <hr className="border mb-8" />
      <p
        className="text-xs mb-4"
        style={{ textAlign: "justify", textIndent: "0.5in" }}
      >
        PT Pindad (Persero) merupakan BUMN yang bergerak di bidang Peralatan
        pertahanan dan keamanan serta peralatan industrial untuk mendukung
        pembangunan nasional dan secara khusus untuk mendukung pertahanan dan
        keamanan negara.
      </p>
      <p
        className="text-xs mb-4"
        style={{ textAlign: "justify", textIndent: "0.5in" }}
      >
        e-Procurement PT. Pindad (Persero) merupakan aplikasi berbasis web yang
        menyediakan berbagai informasi yang berkaitan dengan proses pengadaan
        barang/jasa sesuai dengan Pedoman pengadaan barang/jasa yang berlaku di
        PT. PINDAD (Persero), serta dilakukan secara online/elektronik dengan
        menggunakan fasilitas aplikasi yang dapat di akses melalui
        <a className="text-blue-700" href="https://eproc.pindad.com/">
          {" "}
          https://eproc.pindad.com
        </a>
        .
      </p>
      <p
        className="text-xs mb-4"
        style={{ textAlign: "justify", textIndent: "0.5in" }}
      >
        e-Procurement PT. PINDAD (Persero) adalah sistem pengadaan yang
        memberikan kemudahkan kepada Rekanan dan Calon Penyedia Barang/Jasa
        untuk berkomunikasi dan memberikan dukungan pengadaan kepada PT. PINDAD
        (Persero) untuk dapat mempercepat proses pengadaan, meningkatkan
        efisiensi operasional dari sisi biaya dan waktu, serta memastikan
        transparansi proses pengadaan untuk mewujudkan Good Corporate
        Governance.
      </p>
      <p className="text-xs mb-4">
        Penggunaan Aplikasi e-Procurement ini TIDAK DIPUNGUT BIAYA APAPUN.
      </p>
      <p className="text-xs mb-4">
        Anda ingin menjadi Penyedia PT PINDAD (PERSERO) e-Procurement ..?
      </p>
      <p className="text-xs mb-1">
        Lakukan login Registrasi di{" "}
        <a className="text-blue-700" href="https://eproc.pindad.com/">
          {" "}
          https://eproc.pindad.com
        </a>
        .
      </p>
      <p className="text-xs">Silahkan membaca persyaratannya  <a className="text-blue-700" href="https://eproc.pindad.com/">
          {" "}
          (Klik Disini)
        </a></p>
    </MainApp>
  );
};
