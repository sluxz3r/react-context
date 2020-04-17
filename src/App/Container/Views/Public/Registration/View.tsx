import React from "react";
import { MainApp } from "../../../Components";
import { RegistrationController } from "./Controller";
import RegistrationComponent from "./Component/Registration";

export const Registration = () => {
  return (
    <RegistrationController>
      <MainApp title="REGISTRASI PENYEDIA BARU">
        <RegistrationComponent />
      </MainApp>
    </RegistrationController>
  );
};
