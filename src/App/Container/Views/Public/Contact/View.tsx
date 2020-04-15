import React from "react";
import { MainApp } from "../../../Components/index";

export const Contact = () => {
  return (
    <MainApp title="CONTACT">
      <div className="flex mb-4">
        <div className="w-1/5"></div>
        <div className="w-1/5 text-sm font-bold">Kantor Pusat</div>
      </div>
      <div className="flex mb-2">
        <div className="w-1/5"></div>
        <div className="w-1/5 text-xs font-bold">PT. Pindad</div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/5 text-xs text-right px-4 font-semibold">
          Alamat
        </div>
        <div className="w-1/5 text-xs">
          Jl. Gatot Subroto, No 517 Bandung, Indonesia, 40284
        </div>
      </div>
      <div className="flex">
        <div className="w-1/5 text-xs text-right px-4 font-semibold">Telp.</div>
        <div className="w-1/5 text-xs">+62 22 7312073</div>
      </div>
      <div className="flex mb-10">
        <div className="w-1/5 text-xs text-right px-4 font-semibold">Fax.</div>
        <div className="w-1/5 text-xs">+62 22 7301222</div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/5"></div>
        <div className="w-1/5 text-sm font-bold">Kantor Cabang</div>
      </div>
      <div className="flex mb-2">
        <div className="w-1/5"></div>
        <div className="w-1/5 text-xs font-bold">PT. Pindad</div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/5 text-xs text-right px-4 font-semibold">
          Alamat
        </div>
        <div className="w-1/5 text-xs">Jl. Batu Ceper No. 28 Jakarta 10120</div>
      </div>
      <div className="flex">
        <div className="w-1/5 text-xs text-right px-4 font-semibold">Telp.</div>
        <div className="w-1/5 text-xs">+62 21 3806929</div>
      </div>
      <div className="flex">
        <div className="w-1/5 text-xs text-right px-4 font-semibold">Fax.</div>
        <div className="w-1/5 text-xs">+62 21 3814039</div>
      </div>
    </MainApp>
  );
};
