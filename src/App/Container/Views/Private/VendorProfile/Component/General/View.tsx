import React from "react";
import GeneralComponent from "./Component/General";
import { GeneralController } from "./Controller";

const General = () => {
  return (
    <GeneralController>
      <GeneralComponent />
    </GeneralController>
  );
};

export default General;
