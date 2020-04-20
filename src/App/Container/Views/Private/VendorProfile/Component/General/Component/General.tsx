import React from "react";
import Table from "./Table";

const GeneralComponent = () => {
  return (
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
    </div>
  );
};

export default GeneralComponent;
