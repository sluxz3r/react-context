import React from "react";
import { MainApp } from "../../../Components";
import { RegistrationController } from "./Controller";
import RegistrationComponent from "./Component/Registration";
import ModalR from "../../../Components/ModalR/Modal";

export const Registration = () => {
  return (
    <RegistrationController>
      <MainApp title="REGISTRASI PENYEDIA BARU">
        <ModalR />
        <RegistrationComponent />
      </MainApp>
    </RegistrationController>
  );
};
