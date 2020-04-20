import React, { useContext } from "react";
import Table from "./Table";
import { Modal } from "../../../../../../Components";
import { GeneralContext } from "../Controller";
import { MainApp } from "../../../../../../Components";
import ModalComponent from "./Modal";

const GeneralComponent = () => {
  const { open, setOpen, _handleSubmit } = useContext(GeneralContext);

  return (
    <MainApp
      title="PROFIL PERUSAHAAN"
      onActionRefresh={() => alert("Ok")}
      onActionDone={() => alert("Done")}
      onActionNew={() => setOpen(true)}
    >
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
