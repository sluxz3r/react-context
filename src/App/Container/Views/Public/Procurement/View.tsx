import React from "react";
import { MainApp } from "../../../Components/MainApp/View";
import TableComponents from "./Component/view";
import { ProcurementController } from "./Controller";

export const Procurement = () => {
  return (
    <ProcurementController>
      <MainApp title="PENGUMUMAN PENGADAAN (UMUM)">
        <TableComponents />
      </MainApp>
    </ProcurementController>
  );
};
