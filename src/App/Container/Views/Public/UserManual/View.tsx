import React from "react";
import { MainApp } from "../../../Components/index";
const dataPdf: any = [
    {
        id: 1,
        title: "Klasifikasi Baku Lapangan Usaha Indonesia",
        refPdfLink: "https://eproc-test.pindad.com:8080/file/KBLI-2015.pdf?job=W1siZiIsIjIwMTYvMTEvMDQvN2U2azNhajBtM19LQkxJXzIwMTUucGRmIl1d",
        statusType: null
    },
    {
        id: 2,
        title: "Pendaftaran Calon Penyedia",
        refPdfLink: "https://eproc-test.pindad.com:8080/file/User Manual Pendaftaran Calon Penyedia PT. PINDAD (Persero) V3.pdf?job=W1siZiIsIjIwMTYvMTEvMjUvNTdiZHNiNnc2c19Vc2VyX01hbnVhbF9QZW5kYWZ0YXJhbl9DYWxvbl9QZW55ZWRpYV9QVC5fUElOREFEX1BlcnNlcm9fVjMucGRmIl1d",
        statusType: null
    }
]
export const UserManual = () => {
  return (
    <MainApp title="USER MANUAL">
      <div className="mb-2 text-2xl">RINGKASAN USER MANUAL E-PROC</div>
      {dataPdf.map((e, i) => (
          <p key={i}>
          <a href={e.refPdfLink} className="text-blue-600 text-xs">{e.title}.pdf</a>
          </p>
      ))}
    </MainApp>
  );
};
