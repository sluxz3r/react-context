import React, { useContext } from "react";
import "../../../../../../Assets/Css/App.css";
import { HomeContext } from "../../../Controller";

const Table = () => {
  const { generalList } = useContext(HomeContext);
  console.log("CEK", generalList);

  return (
    <div>
      <table className="w-full">
        <thead className="bg-primary font-bold tracking-wider text-xs">
          <tr>
            <th className="border border-gray-500 py-2 px-4 whitespace-no-wrap text-center">
              No.
            </th>
            <th className="border border-gray-500 py-2 px-4 whitespace-no-wrap">
              Detail
            </th>
            <th className="border border-gray-500 py-2 px-4 whitespace-no-wrap">
              Data Saat Ini
            </th>
            <th className="border border-gray-500 py-2 px-4 whitespace-no-wrap">
              Data Baru
            </th>
            <th className="border border-gray-500 py-2 px-4 whitespace-no-wrap">
              Status
            </th>
            <th className="border border-gray-500 py-2 px-4 whitespace-no-wrap">
              Aksi
            </th>
          </tr>
        </thead>
        {generalList && Object.keys(generalList)}
        {/* <tbody>
          {generalList &&
            generalList.map((e: any, i: any) => (
              <Fragment key={i}>
                <tr className="hover:bg-gray-200">
                  <td
                    className="border border-gray-400 py-1 px-4 text-center align-top bg-white"
                    rowSpan={13}
                  >
                    {i + 1}
                  </td>
                  <td className="border border-gray-400 py-1 px-4">
                    Nama Perusahaan
                  </td>
                  <td className="border border-gray-400 py-1 px-4">
                    {e.companyName}
                  </td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                  <td className="border border-gray-400 py-1 px-4">
                    Dipersiapkan
                  </td>
                  <td
                    className="border border-gray-400 py-1 px-4 align-top text-center bg-white"
                    rowSpan={13}
                  >
                    <button
                      title="Ubah Perusahaan"
                      // onClick={() => controller.setOpen(true)}
                    >
                      <svg
                        className="fill-current text-blue-700 w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-400 py-1 px-4">
                    Kategori Lokasi
                  </td>
                  <td className="border border-gray-400 py-1 px-4">
                    {e.address}
                  </td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-400 py-1 px-4">Negara</td>
                  <td className="border border-gray-400 py-1 px-4">
                    {e.county}
                  </td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-400 py-1 px-4">Provinsi</td>
                  <td className="border border-gray-400 py-1 px-4">
                    {e.province}
                  </td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-400 py-1 px-4">Kota</td>
                  <td className="border border-gray-400 py-1 px-4">{e.city}</td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-400 py-1 px-4">
                    Kecamatan
                  </td>
                  <td className="border border-gray-400 py-1 px-4">
                    {e.district}
                  </td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-400 py-1 px-4">Kode Pos</td>
                  <td className="border border-gray-400 py-1 px-4">
                    {e.postalCode}
                  </td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-400 py-1 px-4">alamat</td>
                  <td className="border border-gray-400 py-1 px-4">
                    {e.address}
                  </td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-400 py-1 px-4">
                    Nomor Telepon
                  </td>
                  <td className="border border-gray-400 py-1 px-4">
                    {e.phoneNumber}
                  </td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-400 py-1 px-4">
                    Nomor Faksimile
                  </td>
                  <td className="border border-gray-400 py-1 px-4">
                    {e.faxNumber}
                  </td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-400 py-1 px-4">Situs</td>
                  <td className="border border-gray-400 py-1 px-4">
                    {e.website}
                  </td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                </tr>
                <tr className="hover:bg-gray-200">
                  <td className="border border-gray-400 py-1 px-4">
                    E-mail Perusahaan
                  </td>
                  <td className="border border-gray-400 py-1 px-4">
                    {e.eMail}
                  </td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                  <td className="border border-gray-400 py-1 px-4"></td>
                </tr>
                <td
                  className="border border-gray-400 py-1 px-4"
                  colSpan={4}
                ></td>
              </Fragment>
            ))}
        </tbody> */}
      </table>
    </div>
  );
};

export default Table;
