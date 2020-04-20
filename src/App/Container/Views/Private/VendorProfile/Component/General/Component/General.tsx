import React, { useContext } from "react";
import Table from "./Table";
import { Modal } from "../../../../../../Components";
import { GeneralContext } from "../Controller";
import { MainApp } from "../../../../../../Components";
import ModalComponent from "./Modal";

const GeneralComponent = () => {
  const { open, setOpen, _handleSubmit } = useContext(GeneralContext);

  const ButtonMainApp = () => {
    return (
      <div className="text-xs mr-6 flex flex-row items-center">
        <div>
          <button className="my-0 mr-6">
            <svg
              className="fill-current h-3 w-3 text-blue-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"
              ></path>
            </svg>
          </button>
        </div>
        {/* <button className="bg-orangepindad-100 hover:bg-yellow-600 text-white mr-3 px-4 py-1 inline-flex items-center border border-yellow-500">
          <svg
            className="fill-current h-3 w-3 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <path d="M9 8c1.66 0 2.99-1.34 2.99-3S10.66 2 9 2C7.34 2 6 3.34 6 5s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V16h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
          <span>Set Primary Data</span>
        </button> */}
        <button className="bg-bluepindad-300 hover:bg-blue-900 text-white px-4 py-1 inline-flex items-center border border-blue-800">
          Selesai
        </button>
        <button
          onClick={() => setOpen(true)}
          className="bg-greenpindad-100 hover:bg-green-700 text-white px-4 py-1 inline-flex items-center border border-gray-600"
        >
          <svg
            className="fill-current w-3 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 5 5"
          >
            <path d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" />
          </svg>
          <span>Buat Entri Baru</span>
        </button>
      </div>
    );
  };

  return (
    <MainApp title="PROFIL PERUSAHAAN" button={<ButtonMainApp />}>
      <div className="flex flex-col">
        <div className="w-full flex flex-col w-4/5 bg-white text-sm">
          <div className="flex flex-row py-6">
            <label className="w-1/5 text-right px-4 font-bold">
              Nama Perusahaan
            </label>
            <label className="w-4/5 text-left px-4">PINDAD JAYA</label>
          </div>
          <div>
            <Table />
          </div>
        </div>
        <Modal
          title="Perusahaan"
          open={open}
          width="w-4/5"
          onClose={() => {
            setOpen(false);
          }}
          onActionOne={() => {
            setOpen(false);
          }}
          onActionTwo={async () => _handleSubmit()}
          textOne="Batal"
          textTwo="Simpan"
        >
          <ModalComponent />
        </Modal>
      </div>
    </MainApp>
  );
};

export default GeneralComponent;
