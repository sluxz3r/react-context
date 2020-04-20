import React from "react";
import { MainApp } from "../../../../../Components";
import GeneralComponent from "./Component/General";

const General = () => {
  return (
    <MainApp
      title="PROFIL PERUSAHAAN"
      onActionRefresh={() => alert("Ok")}
      onActionDone={() => alert("Done")}
      onActionNew={() => alert("New")}
    >
      <GeneralComponent />
    </MainApp>
  );
};

export default General;
