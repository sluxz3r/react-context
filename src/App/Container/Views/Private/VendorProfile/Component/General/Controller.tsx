import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { getToken } from "../../../../../../Misc/Cookies";

interface InitialState {
  customStyles: object;
  _isLogin: string | null;
  open: boolean;
  setOpen: Function;
  register: Function;
  handleSubmit: Function;
  errors: object;
  _onSubmit: Function;
  optionsCompanyType: Array<object>;
  Indonesia: Array<object>;
  Yogya: Array<object>;
  Sleman: Array<object>;
  columns: Array<object>;
  branchName: string;
  address: string;
  country: string;
  province: string;
  city: string;
  subDistrict: string;
  postalCode: string;
  phoneNumber: string;
  phoneNumberExt: string;
  faxNumber: string;
  faxNumberExt: string;
  companyEmail: string;
  setBranchName: Function;
  setAddress: Function;
  setCountry: Function;
  setProvince: Function;
  setCity: Function;
  setSubDistrict: Function;
  setPostalCode: Function;
  setPhoneNumber: Function;
  setPhoneNumberExt: Function;
  setFaxNumber: Function;
  setFaxNumberExt: Function;
  setCompanyEmail: Function;
}

const initialState = {
  customStyles: {},
  _isLogin: null,
  open: false,
  setOpen: () => {},
  register: () => {},
  handleSubmit: () => {},
  errors: {},
  _onSubmit: () => {},
  optionsCompanyType: [{}],
  Indonesia: [{}],
  Yogya: [{}],
  Sleman: [{}],
  columns: [{}],
  branchName: "",
  setBranchName: () => {},
  address: "",
  setAddress: () => {},
  country: "",
  setCountry: () => {},
  province: "",
  setProvince: () => {},
  city: "",
  setCity: () => {},
  subDistrict: "",
  setSubDistrict: () => {},
  postalCode: "",
  setPostalCode: () => {},
  phoneNumber: "",
  setPhoneNumber: () => {},
  phoneNumberExt: "",
  setPhoneNumberExt: () => {},
  faxNumber: "",
  setFaxNumber: () => {},
  faxNumberExt: "",
  setFaxNumberExt: () => {},
  companyEmail: "",
  setCompanyEmail: () => {},
};

export const GeneralContext = createContext<InitialState>(initialState);

export const {
  Provider: GeneralProvider,
  Consumer: GeneralConsumer,
} = GeneralContext;

export const GeneralController = ({ children }) => {
  const _isLogin = getToken();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validateCriteriaMode: "all",
    mode: "onChange",
  });
  const [branchName, setBranchName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberExt, setPhoneNumberExt] = useState("");
  const [faxNumber, setFaxNumber] = useState("");
  const [faxNumberExt, setFaxNumberExt] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const _onSubmit = (value) => console.log("Validate", value);
  const optionsCompanyType = [
    {
      label: "10 dari 255 (harap ketik untuk memfilter)",
      isDisabled: true,
    },
    { value: "Indonesia", label: "Indonesia" },
  ];
  const Indonesia = [{ value: "Yogyakarta", label: "Yogyakarta" }];
  const Yogya = [{ value: "Sleman", label: "Sleman" }];
  const Sleman = [{ value: "Ngaglik", label: "Ngaglik" }];
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 32,
      minHeight: 32,
    }),
  };
  const columns = [
    {
      label: "No",
      accessor: "no",
      width: "w-auto",
      align: "text-center",
    },
    {
      label: "Detail",
      accessor: "detail",
      width: "w-2/5",
      align: "text-left",
    },
    {
      label: "Data Saat Ini",
      accessor: "oldData",
      width: "w-1/5",
      align: "text-left",
    },
    {
      label: "Data Baru",
      accessor: "newData",
      width: "w-1/5",
      align: "text-left",
    },
    {
      label: "Status",
      accessor: "status",
      width: "w-1/5",
      align: "text-left",
    },
    {
      label: "Aksi",
      accessor: "aksi",
      width: "w-auto",
      align: "text-left",
    },
  ];

  return (
    <GeneralProvider
      value={{
        customStyles,
        _isLogin,
        open,
        setOpen,
        register,
        handleSubmit,
        errors,
        _onSubmit,
        optionsCompanyType,
        Indonesia,
        Yogya,
        Sleman,
        columns,
        branchName,
        address,
        country,
        province,
        city,
        subDistrict,
        postalCode,
        phoneNumber,
        phoneNumberExt,
        faxNumber,
        faxNumberExt,
        companyEmail,
        setBranchName,
        setAddress,
        setCountry,
        setProvince,
        setCity,
        setSubDistrict,
        setPostalCode,
        setPhoneNumber,
        setPhoneNumberExt,
        setFaxNumber,
        setFaxNumberExt,
        setCompanyEmail,
      }}
    >
      {children}
    </GeneralProvider>
  );
};
