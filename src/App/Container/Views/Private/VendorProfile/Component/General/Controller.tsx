import React, { createContext, useState, useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";
import { getToken } from "../../../../../../Misc/Cookies";

interface InitialState {
  customStyles: object;
  _isLogin: string | null;
  open: boolean;
  setOpen: Function;
  _onSubmit: Function;
  optionsCompanyType: Array<object>;
  Indonesia: Array<object>;
  Yogya: Array<object>;
  Sleman: Array<object>;
  branchName: string;
  address: string;
  country: string;
  province: string;
  city: string;
  district: string;
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
  setDistrict: Function;
  setPostalCode: Function;
  setPhoneNumber: Function;
  setPhoneNumberExt: Function;
  setFaxNumber: Function;
  setFaxNumberExt: Function;
  setCompanyEmail: Function;
  _handleCountry: Function;
  _handleProvince: Function;
  _handleCity: Function;
  _onValidate: Function;
  _handleDistrict: Function;
  _handleSubmit: Function;
  register: Function;
}

const initialState = {
  customStyles: {},
  _isLogin: null,
  open: false,
  setOpen: () => {},
  register: () => {},
  _onSubmit: () => {},
  optionsCompanyType: [{}],
  Indonesia: [{}],
  Yogya: [{}],
  Sleman: [{}],
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
  district: "",
  setDistrict: () => {},
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
  _handleCountry: () => {},
  _handleProvince: () => {},
  _handleCity: () => {},
  _handleDistrict: () => {},
  _onValidate: () => {},
  _handleSubmit: () => {},
};

export const GeneralContext = createContext<InitialState>(initialState);

export const {
  Provider: GeneralProvider,
  Consumer: GeneralConsumer,
} = GeneralContext;

export const GeneralController = ({ children }) => {
  const _isLogin = getToken();
  const [open, setOpen] = useState(false);
  const [branchName, setBranchName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
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

  // FormContext
  const methods = useForm({
    mode: "onChange",
  });
  const { register, setValue, triggerValidation } = methods;

  useEffect(() => {
    register(
      { name: "business_type" },
      {
        required: true,
        validate: (value) => {
          return Array.isArray(value) ? value.length > 0 : !!value;
        },
      }
    );
  }, [register]);

  useEffect(() => {
    register(
      { name: "country" },
      {
        required: true,
        validate: (value) => {
          return Array.isArray(value) ? value.length > 0 : !!value;
        },
      }
    );
  }, [register]);

  useEffect(() => {
    register(
      { name: "province" },
      {
        required: true,
        validate: (value) => {
          return Array.isArray(value) ? value.length > 0 : !!value;
        },
      }
    );
  }, [register]);

  useEffect(() => {
    register(
      { name: "city" },
      {
        required: true,
        validate: (value) => {
          return Array.isArray(value) ? value.length > 0 : !!value;
        },
      }
    );
  }, [register]);

  useEffect(() => {
    register(
      { name: "district" },
      {
        required: true,
        validate: (value) => {
          return Array.isArray(value) ? value.length > 0 : !!value;
        },
      }
    );
  }, [register]);

  const _handleCountry = (e: any) => {
    setCountry(e && e.value);
    setValue("country", e && e.value);
    triggerValidation("country");
  };

  const _handleProvince = (e: any) => {
    setProvince(e && e.value);
    setValue("province", e && e.value);
    triggerValidation("province");
  };

  const _handleCity = (e: any) => {
    setCity(e && e.value);
    setValue("city", e && e.value);
    triggerValidation("city");
  };

  const _handleDistrict = (e: any) => {
    setDistrict(e && e.value);
    setValue("district", e && e.value);
    triggerValidation("district");
  };

  const val = [
    "branchName",
    "address",
    "postalCode",
    "country",
    "province",
    "city",
    "district",
    "phoneNumber",
    "phoneNumberExt",
    "faxNumber",
    "faxNumberExt",
    "companyEmail",
  ];

  const _handleSubmit = async () => {
    if (await triggerValidation(val)) {
      console.log("Sukses");
    } else {
      console.log("Gagal");
    }
  };

  const _onValidate = async () => {
    console.log("validation");
  };

  return (
    <FormContext {...methods}>
      <GeneralProvider
        value={{
          customStyles,
          _isLogin,
          open,
          setOpen,
          _onSubmit,
          optionsCompanyType,
          Indonesia,
          Yogya,
          Sleman,
          branchName,
          address,
          country,
          province,
          city,
          district,
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
          setDistrict,
          setPostalCode,
          setPhoneNumber,
          setPhoneNumberExt,
          setFaxNumber,
          setFaxNumberExt,
          setCompanyEmail,
          _handleCountry,
          _handleProvince,
          _handleCity,
          _handleDistrict,
          _onValidate,
          _handleSubmit,
          register,
        }}
      >
        {children}
      </GeneralProvider>
    </FormContext>
  );
};
