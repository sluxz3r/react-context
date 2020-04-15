import React from "react";
import { MainApp } from "../../../Components";
import { RegistrationController } from "./Controller";
import RegistrationComponent from "./Component/Registration";
import TesView from "./Tes";

export const Registration = () => {
  return (
    <RegistrationController>
      <MainApp title="REGISTRASI PENYEDIA BARU">
        <TesView />
        <RegistrationComponent />
      </MainApp>
    </RegistrationController>
  );
};
