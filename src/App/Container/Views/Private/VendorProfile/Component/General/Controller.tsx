import React, { createContext, useState, useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";
import { getToken } from "../../../../../../Misc/Cookies";
import { INSERT_VENDOR_CONTACT } from "./Query";
import { useMutation } from "react-apollo";

interface InitialState {
  customStyles: object;
  _isLogin: string | null;
  open: boolean;
  setOpen: Function;
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
  website: string;
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
  setWebsite: Function;
  _handleCountry: Function;
  _handleProvince: Function;
  _handleCity: Function;
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
  website: "",
  setWebsite: () => {},
  _handleCountry: () => {},
  _handleProvince: () => {},
  _handleCity: () => {},
  _handleDistrict: () => {},
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
  const [website, setWebsite] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");

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
    "country",
    "province",
    "city",
    "district",
    "postalCode",
    "phoneNumber",
    "phoneNumberExt",
    "faxNumber",
    "faxNumberExt",
    "website",
    "companyEmail",
  ];

  // Add
  const [submitAdd] = useMutation(INSERT_VENDOR_CONTACT, {
    errorPolicy: "all",
  });

  const _handleSubmit = async () => {
    if (await triggerValidation(val)) {
      try {
        await submitAdd({
          variables: {
            company_name: branchName,
            address,
            country,
            province,
            city,
            district,
            postal_code: postalCode,
            phone_number: phoneNumber,
            website,
            e_mail: companyEmail,
          },
        });
      } catch (error) {}
    } else {
      console.log("Gagal");
    }
  };

  return (
    <FormContext {...methods}>
      <GeneralProvider
        value={{
          customStyles,
          _isLogin,
          open,
          setOpen,
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
          website,
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
          setWebsite,
          _handleCountry,
          _handleProvince,
          _handleCity,
          _handleDistrict,
          _handleSubmit,
          register,
        }}
      >
        {children}
      </GeneralProvider>
    </FormContext>
  );
};
