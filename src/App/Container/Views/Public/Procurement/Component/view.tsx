import React, { useContext } from "react";
import "./style.css";
import { ProcurementContext } from "../Controller";
import ClickAwayListener from "react-click-away-listener";

const TableComponents = () => {
  const {
    _handleOpenBidSubmission,
    _handleOpenNumber,
    _handleOpenPurchasing,
    _handleOpenScopeWork,
    _handleOpenTenderName,
    _handleOpenState,
    dataProcurement,
    openBidSubmission,
    openNumber,
    openPurchasing,
    openScopeWork,
    openTenderName,
    openState,
    procurement,
    setProcurement,
    _handleClickAway,
  } = useContext(ProcurementContext);

  const data: any = dataProcurement && dataProcurement.GetVendorTaxDocuments;

  const TableProcurement = () => {
    return (
      <div className="overflow-x-auto w-full">
        <table className="border-collapse border-2 text-xs">
          <thead className="bg-yellow-500">
            <tr>
              <th className="p-2 text-center md:w-auto text-gray-800 border-2">
                File
              </th>
              <th className="p-2 text-center md:w-auto text-gray-800 border-2">
                No.
              </th>
              <th className="p-2 text-center md:w-auto text-gray-800 border-2">
                Nama Pengadaan
              </th>
              <th className="p-2 text-center md:w-auto text-gray-800 border-2">
                Kode Purchasing Organization
              </th>
              <th className="p-2 text-center md:w-auto text-gray-800 border-2">
                Purchasing Organization
              </th>
              <th className="p-2 text-center md:w-auto text-gray-800 border-2">
                Lingkup Pekerjaan
              </th>
              <th className="p-2 text-center md:w-auto text-gray-800 border-2">
                Metode Pengadaan
              </th>
              <th className="p-2 text-center md:w-auto text-gray-800 border-2">
                Metode Pemasukan Penawaran
              </th>
              <th className="p-2 text-center md:w-auto text-gray-800 border-2">
                Dibuat Pada
              </th>
            </tr>
          </thead>
          {/* <tbody>
          {data &&
            data.map((e, index) => (
              <tr key={index}>
                <td className="p-2 border-2  text-center">
                  {e.a}
                </td>
                <td className="p-2 border-2  text-center">
                  {e.b}
                </td>
              </tr>
            ))}
        </tbody> */}
        </table>
      </div>
    );
  };

  const Sortir = () => {
    return (
      <ClickAwayListener onClickAway={() => _handleClickAway()}>
        <div className="w-full flex flex-col px-1 lg:px-0  lg:pl-1 py-2 md:py-2 lg:py-0 lg:flex-row sm:flex-row bg-white lg:items-center border border-gray-300 font-hairline text-xs ">
          <span className=" py-1 font-semibold">Penyaring:</span>

          <div className="flex py-1 lg:py-0 md:py-0 sm:py-0 flex-row lg:flex pl-1 lg:items-center lg:w-auto">
            <span className="px-1 lg:pt-0 font-semibold  lg:w-auto">No.:</span>
            <div className=" flex-row lg:flex lg:items-center lg:w-auto">
              <div className="cursor-pointer w-auto md:w-auto lg:w-auto block lg:inline-block border-none leading-none hover:bg-gray-300 rounded lg:mt-0">
                <div className="">
                  <div
                    onClick={() => _handleOpenNumber()}
                    className="flex flex-row items-center"
                  >
                    <span className="text-gray-900">Filter</span>
                    {openNumber === false ? (
                      <svg
                        className="fill-current h-4 w-4 mr-1 "
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
                        className="fill-current h-4 w-4 mr-1"
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
                    className={`flex flex-row absolute lg:px-2 bg-white py-1 lg:py-2 lg:bg-white text-left static md:static lg:absolute lg:text-black top-options-filter sm:ml-20 rounded border border-gray-500 shadow ${
                      openNumber === false && "hidden"
                    }`}
                  >
                    <input
                      className="border-gray-500 w-3/4 border-2 outline-none focus:border-blue-600  rounded-sm p-1"
                      placeholder="No."
                    />
                    <button className=" text-sm text-white p-1 bg-blue-600 mx-2  rounded-sm ">
                      {" "}
                      update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="flex py-1 lg:py-0 md:py-0 sm:py-0 flex-row lg:flex pl-1 lg:items-center lg:w-auto">
            <span className="px-1 lg:pt-0 font-semibold  lg:w-auto">
              Nama Pengadaan:
            </span>
            <div className=" flex-row lg:flex lg:items-center lg:w-auto">
              <div className="cursor-pointer w-auto md:w-auto lg:w-auto block lg:inline-block border-none leading-none hover:bg-gray-300 rounded lg:mt-0">
                <div className="">
                  <div
                    onClick={() => _handleOpenTenderName()}
                    className="flex flex-row items-center"
                  >
                    <span className="text-gray-900">Filter</span>
                    {openTenderName === false ? (
                      <svg
                        className="fill-current h-4 w-4 mr-1 "
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
                        className="fill-current h-4 w-4 mr-1"
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
                    className={`flex flex-row absolute lg:px-2 bg-white py-1 lg:py-2 lg:bg-white text-left static md:static lg:absolute lg:text-black top-options-filter3 sm:ml-20 rounded border border-gray-500 shadow ${
                      openTenderName === false && "hidden"
                    }`}
                  >
                    <input
                      className="border-gray-500 w-3/4 border-2 outline-none focus:border-blue-600  rounded-sm p-1"
                      placeholder="No."
                    />
                    <button className=" text-sm text-white p-1 bg-blue-600 mx-2  rounded-sm ">
                      {" "}
                      update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex py-1 lg:py-0 md:py-0 sm:py-0 flex-row lg:flex pl-1 lg:items-center lg:w-auto">
            <span className="px-1 text-center lg:pt-0 font-semibold lg:w-auto">
              Lingkup Pekerjaan:
            </span>
            <div className=" flex-row lg:flex lg:items-center lg:w-auto">
              <div className="cursor-pointer w-auto md:w-auto lg:w-auto block lg:inline-block border-none leading-none hover:bg-gray-300 rounded lg:mt-0">
                <div className="">
                  <div
                    onClick={() => _handleOpenScopeWork()}
                    className="flex flex-row items-center"
                  >
                    <span className="text-gray-900">Filter</span>
                    {openScopeWork === false ? (
                      <svg
                        className="fill-current h-4 w-4 mr-1 "
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
                        className="fill-current h-4 w-4 mr-1"
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
                    className={`flex flex-row absolute lg:px-2 bg-white py-1 lg:py-2 lg:bg-white text-left static md:static lg:absolute lg:text-black top-options-filter3 sm:ml-20 rounded border border-gray-500 shadow ${
                      openScopeWork === false && "hidden"
                    }`}
                  >
                    <input
                      className="border-gray-500 w-3/4 border-2 outline-none focus:border-blue-600  rounded-sm p-1"
                      placeholder="No."
                    />
                    <button className=" text-sm text-white p-1 bg-blue-600 mx-2  rounded-sm ">
                      {" "}
                      update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex py-1 lg:py-0 md:py-0 sm:py-0 flex-row lg:flex pl-1 lg:items-center lg:w-auto">
            <span className="px-1 lg:pt-0 font-semibold  lg:w-auto">
              Status:
            </span>
            <div className=" flex-row lg:flex lg:items-center lg:w-auto">
              <div className="cursor-pointer w-auto md:w-auto lg:w-auto block lg:inline-block border-none leading-none hover:bg-gray-300 rounded lg:mt-0">
                <div className="">
                  <div
                    onClick={() => _handleOpenState()}
                    className="flex flex-row items-center"
                  >
                    <span className="text-gray-900">Filter</span>
                    {openState === false ? (
                      <svg
                        className="fill-current h-4 w-4 mr-1 "
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
                        className="fill-current h-4 w-4 mr-1"
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
                    className={`flex flex-col lg:px-2 absolute bg-white py-1 lg:py-2 lg:bg-white text-left static md:static lg:absolute lg:text-black top-options-filter2 rounded border border-gray-500 shadow ${
                      openState === false && "hidden"
                    }`}
                  >
                    <input
                      className="border-gray-500 w-auto border-2 w-auto outline-none focus:border-blue-600 p-1 rounded-sm mb-2 mx-2"
                      placeholder=" Status"
                    />
                    <div className="ml-2 text-md">
                      <label className="select-none flex container content-center text-center block relative cursor-pointer  py-1 pl-8 ">
                        Konsep
                        <input
                          className="absolute opacity-0 left-0 top-0 cursor-pointer"
                          type="checkbox"
                        />
                        <span className="h-6 w-6 my-1 checkmark absolute top-0 left-0 bg-gray-400"></span>
                      </label>
                      <label className="select-none flex container content-center text-center block relative cursor-pointer  py-1 pl-8 ">
                        Diumumkan
                        <input
                          className="absolute opacity-0 left-0 top-0 cursor-pointer"
                          type="checkbox"
                        />
                        <span className="h-6 w-6 my-1 checkmark absolute top-0 left-0 bg-gray-400"></span>
                      </label>
                      <label className="select-none flex container content-center text-center block relative cursor-pointer  py-1 pl-8 ">
                        Cancelled
                        <input
                          className="absolute opacity-0 left-0 top-0 cursor-pointer"
                          type="checkbox"
                        />
                        <span className="h-6 w-6 my-1 checkmark absolute top-0 left-0 bg-gray-400"></span>
                      </label>
                      <label className="select-none flex container content-center text-center block relative cursor-pointer  py-1 pl-8 ">
                        Discarded
                        <input
                          className="absolute opacity-0 left-0 top-0 cursor-pointer"
                          type="checkbox"
                        />
                        <span className="h-6 w-6 my-1 checkmark absolute top-0 left-0 bg-gray-400"></span>
                      </label>
                      <label className="select-none flex container content-center text-center block relative cursor-pointer  py-1 pl-8 ">
                        Selesai
                        <input
                          className="absolute bg-orange-600 opacity-0 left-0 top-0 cursor-pointer"
                          type="checkbox"
                        />
                        <span className="h-6 w-6 my-1 checkmark absolute top-0 left-0 bg-gray-400"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex py-1 lg:py-0 md:py-0 sm:py-0 flex-row lg:flex pl-1 lg:items-center lg:w-auto">
            <span className="px-1 lg:pt-0 font-semibold  lg:w-auto">
              Purchasing Organization:
            </span>
            <div className=" flex-row lg:flex lg:items-center lg:w-auto">
              <div className="cursor-pointer w-auto md:w-auto lg:w-auto block lg:inline-block border-none leading-none hover:bg-gray-300 rounded lg:mt-0">
                <div className="">
                  <div
                    onClick={() => _handleOpenPurchasing()}
                    className="flex flex-row items-center"
                  >
                    <span className="text-gray-900">Filter</span>
                    {openPurchasing === false ? (
                      <svg
                        className="fill-current h-4 w-4 mr-1 "
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
                        className="fill-current h-4 w-4 mr-1"
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
                    className={`flex flex-row absolute lg:px-2 bg-white py-1 lg:py-2 lg:bg-white text-left static md:static lg:absolute lg:text-black top-options-filter3 sm:ml-20 rounded border border-gray-500 shadow ${
                      openPurchasing === false && "hidden"
                    }`}
                  >
                    <input
                      className="border-gray-500 w-3/4 border-2 outline-none focus:border-blue-600  rounded-sm p-1"
                      placeholder="Purchasing Organization"
                    />
                    <button className=" text-sm text-white p-1 bg-blue-600 mx-2  rounded-sm ">
                      {" "}
                      update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-1 lg:py-0 md:py-0 sm:py-0 flex-row lg:flex pl-1 lg:items-center lg:w-auto">
            <span className="px-1 lg:pt-0 font-semibold  lg:w-auto">
              Status:
            </span>
            <div className=" flex-row lg:flex lg:items-center lg:w-auto">
              <div className="cursor-pointer w-auto md:w-auto lg:w-auto block lg:inline-block border-none leading-none hover:bg-gray-300 rounded lg:mt-0">
                <div className="">
                  <div
                    onClick={() => _handleOpenBidSubmission()}
                    className="flex flex-row items-center"
                  >
                    <span className="text-gray-900">Filter</span>
                    {openBidSubmission === false ? (
                      <svg
                        className="fill-current h-4 w-4 mr-1 "
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
                        className="fill-current h-4 w-4 mr-1"
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
                    className={`flex flex-col lg:px-2 absolute bg-white py-1 lg:py-2 lg:bg-white text-left static md:static lg:absolute lg:text-black top-options-filter2 rounded border border-gray-500 shadow ${
                      openBidSubmission === false && "hidden"
                    }`}
                  >
                    <input
                      className="border-gray-500 w-auto border-2 w-auto outline-none focus:border-blue-600 p-1 rounded-sm mb-2 mx-2"
                      placeholder="Metode Penawaran"
                    />
                    <div className="ml-2 text-md">
                      <label className="select-none flex container content-center text-center block relative cursor-pointer  py-1 pl-8 ">
                        2 Sampul
                        <input
                          className="absolute opacity-0 left-0 top-0 cursor-pointer"
                          type="checkbox"
                        />
                        <span className="h-6 w-6 my-1 checkmark absolute top-0 left-0 bg-gray-400"></span>
                      </label>
                      <label className="select-none flex container content-center text-center block relative cursor-pointer  py-1 pl-8 ">
                        2 Tahap
                        <input
                          className="absolute opacity-0 left-0 top-0 cursor-pointer"
                          type="checkbox"
                        />
                        <span className="h-6 w-6 my-1 checkmark absolute top-0 left-0 bg-gray-400"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row lg:flex lg:items-center lg:w-auto">
            <button className="flex px-2 outline-none lg:pt-0 font-semibold w-full lg:w-auto">
              Reset
            </button>
          </div>
        </div>
      </ClickAwayListener>
    );
  };

  return (
    <div>
      <Sortir />
      <TableProcurement />
    </div>
  );
};

export default TableComponents;
