import React from "react";
import GeneralComponent from "./Component/General";
import { GeneralController } from "./Controller";

const General = () => {
  return (
<<<<<<< HEAD
    <GeneralController>
=======
    <MainApp
      title="PROFIL PERUSAHAAN"
      onActionRefresh={() => alert("Ok")}
      onActionDone={() => alert("Done")}
      onActionNew={() => alert("New")}
    >
>>>>>>> add reusable 4 button main app
      <GeneralComponent />
    </GeneralController>
  );
};

export default General;
