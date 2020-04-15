import React, { createContext, useState, createRef } from "react";
import { useForm } from "react-hook-form";
import { Checkbox, withStyles, CheckboxProps } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { useMutation } from "react-apollo";
import { REGISTER_NEW_VENDOR } from "./Query";

interface InitialState {
  _handleSubmitRegister: Function;
  loadingRegister: boolean;
  data: any;
  error: string;
  showError: boolean;
  showSuccess: boolean;
  messageSuccess: string;
  alert: Boolean;
  setAlert: Function;
  CheckboxRegister: any;
  handleSubmit: Function;
  register: Function;
  errors: object;
  _onSubmit: Function;
  customStyles: object;
  listClassification: Array<object>;
  national: Array<object>;
  Indonesia: Array<object>;
  Yogyakarta: Array<object>;
  Sleman: Array<object>;
  vendor_type: string;
  setVendor_type: Function;
  name: string;
  setName: Function;
  owner: string;
  setOwner: Function;
  business_type: string;
  setBusiness_type: Function;
  address: string;
  setAddress: Function;
  country: string;
  setCountry: Function;
  province: string;
  setProvince: Function;
  city: string;
  setCity: Function;
  district: string;
  setDistrict: Function;
  postal_code: string;
  setPostal_code: Function;
  phone_number: string;
  setPhone_number: Function;
  phone_numberExt: string;
  setPhone_numberExt: Function;
  e_mail: string;
  setE_mail: Function;
  website: string;
  setWebsite: Function;
  pic_name: string;
  setPic_name: Function;
  picMobileNumber: string;
  setPicMobileNumber: Function;
  fax_number: string;
  setFax_number: Function;
  fax_numberExt: string;
  setFax_numberExt: Function;
  picEmail: string;
  setPicEmail: Function;
  tenderReferenceNumber: string;
  setTenderReferenceNumber: Function;
  pkpNumber: string;
  setPkpNumber: Function;
  pkpAttachment: object;
  setPkpAttachment: Function;
  tax_document_number: string;
  setTax_document_number: Function;
  tax_document_type: object;
  setTax_document_type: Function;
  errPkpAttachment: string;
  setErrPkpAttachment: Function;
  errTax_document_type: string;
  setErrTax_document_type: Function;
  recaptcha: boolean;
  setRecaptcha: Function;
  handleFilePkp: Function;
  handleErrFilePkp: Function;
  handleFileTaxId: Function;
  handleErrFileTaxId: Function;
  recaptchaRef: unknown;
  isBtnDissabled: boolean;
  checkbox: boolean;
  setCheckbox: Function;
  open: boolean;
  setOpen: Function;
}

const initialState = {
  _handleSubmitRegister: () => {},
  loadingRegister: false,
  data: {},
  error: "",
  showError: false,
  showSuccess: false,
  messageSuccess: "",
  alert: false,
  setAlert: () => {},
  CheckboxRegister: null,
  handleSubmit: () => {},
  register: () => {},
  errors: {},
  _onSubmit: () => {},
  customStyles: {},
  listClassification: [],
  national: [],
  Indonesia: [],
  Yogyakarta: [],
  Sleman: [],
  vendor_type: "",
  setVendor_type: () => {},
  name: "",
  setName: () => {},
  owner: "",
  setOwner: () => {},
  business_type: "",
  setBusiness_type: () => {},
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
  postal_code: "",
  setPostal_code: () => {},
  phone_number: "",
  setPhone_number: () => {},
  phone_numberExt: "",
  setPhone_numberExt: () => {},
  fax_number: "",
  setFax_number: () => {},
  fax_numberExt: "",
  setFax_numberExt: () => {},
  e_mail: "",
  setE_mail: () => {},
  website: "",
  setWebsite: () => {},
  pic_name: "",
  setPic_name: () => {},
  picMobileNumber: "",
  setPicMobileNumber: () => {},
  picEmail: "",
  setPicEmail: () => {},
  tenderReferenceNumber: "",
  setTenderReferenceNumber: () => {},
  pkpNumber: "",
  setPkpNumber: () => {},
  pkpAttachment: { files: null },
  setPkpAttachment: () => {},
  tax_document_number: "",
  setTax_document_number: () => {},
  tax_document_type: { files: null },
  setTax_document_type: () => {},
  errPkpAttachment: "",
  setErrPkpAttachment: () => {},
  errTax_document_type: "",
  setErrTax_document_type: () => {},
  recaptcha: false,
  setRecaptcha: () => {},
  handleFilePkp: () => {},
  handleErrFilePkp: () => {},
  handleFileTaxId: () => {},
  handleErrFileTaxId: () => {},
  recaptchaRef: null,
  isBtnDissabled: false,
  checkbox: false,
  setCheckbox: () => {},
  open: false,
  setOpen: () => {},
};

export const RegistrationContext = createContext<InitialState>(initialState);

export const {
  Provider: RegistrationProvider,
  Consumer: RegistrationConsumer,
} = RegistrationContext;

export const RegistrationController = ({ children }) => {
  const [data, setData] = useState<Object>({});
  const [error, setError] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [messageSuccess, setMessageSuccess] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const [alert, setAlert] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validateCriteriaMode: "all",
    mode: "onChange",
  });
  const [vendor_type, setVendor_type] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [owner, setOwner] = useState<string>("");
  const [business_type, setBusiness_type] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [postal_code, setPostal_code] = useState<string>("");
  const [phone_number, setPhone_number] = useState<string>("");
  const [phone_numberExt, setPhone_numberExt] = useState<string>("");
  const [fax_number, setFax_number] = useState<string>("");
  const [fax_numberExt, setFax_numberExt] = useState<string>("");
  const [e_mail, setE_mail] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [pic_name, setPic_name] = useState<string>("");
  const [picMobileNumber, setPicMobileNumber] = useState<string>("");
  const [picEmail, setPicEmail] = useState<string>("");
  const [tenderReferenceNumber, setTenderReferenceNumber] = useState<string>(
    ""
  );
  const [pkpNumber, setPkpNumber] = useState<string>("");
  const [pkpAttachment, setPkpAttachment] = useState<object>({ files: "" });
  const [tax_document_number, setTax_document_number] = useState<string>("");
  const [tax_document_type, setTax_document_type] = useState<object>({
    files: "",
  });
  const [errPkpAttachment, setErrPkpAttachment] = useState<string>("");
  const [errTax_document_type, setErrTax_document_type] = useState<string>("");
  const recaptchaRef = createRef();
  const [recaptcha, setRecaptcha] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [open, setOpen] = useState(false);

  const listClassification = [{ value: "PENDIDIKAN", label: "PENDIDIKAN" }];

  const national = [{ value: "Indonesia", label: "Indonesia" }];
  const Indonesia = [{ value: "Yogyakarta", label: "Yogyakarta" }];
  const Yogyakarta = [{ value: "Sleman", label: "Sleman" }];
  const Sleman = [{ value: "Ngaglik", label: "Ngaglik" }];
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 32,
      minHeight: 32,
    }),
  };
  const _onSubmit = () => console.log("Validate");

  const CheckboxRegister = withStyles({
    root: {
      color: grey[300],
      "&$checked": {
        color: grey[200],
      },
    },
    checked: {},
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);

  const handleFilePkp = (val) => {
    if (val.target.files[0].size > 2097152) {
      setErrPkpAttachment("Error");
    } else {
      setErrPkpAttachment("");
      setPkpAttachment(val.target.files[0]);
    }
  };

  const handleErrFilePkp = () => {
    setTax_document_type({ files: null });
    setErrPkpAttachment("");
  };

  const handleFileTaxId = (val) => {
    if (val.target.files[0].size > 2097152) {
      setErrTax_document_type("Error");
    } else {
      setErrTax_document_type("");
      setTax_document_type(val.target.files[0]);
    }
  };

  const handleErrFileTaxId = () => {
    setTax_document_type({ files: null });
    setErrTax_document_type("");
  };

  const isBtnDissabled =
    Object.keys(errors).length !== 0 ||
    recaptcha === false ||
    vendor_type === "" ||
    name === "" ||
    owner === "" ||
    business_type === "" ||
    address === "" ||
    province === "" ||
    city === "" ||
    district === "" ||
    postal_code === "" ||
    phone_number === "" ||
    e_mail === "" ||
    website === "" ||
    pic_name === "" ||
    picMobileNumber === "" ||
    picEmail === "" ||
    tax_document_number === "" ||
    tax_document_type === null ||
    errTax_document_type !== "";

  const type = tax_document_type && "NPWP";

  const [
    submitRegister,
    { loading: loadingRegister },
  ] = useMutation(REGISTER_NEW_VENDOR, { errorPolicy: "all" });

  const _handleSubmitRegister = async () => {
    try {
      const { data } = await submitRegister({
        variables: {
          vendor_type,
          name,
          owner,
          business_type,
          register_date: Date.now(),
          company_name: name,
          address,
          country,
          province,
          city,
          district,
          postal_code: parseInt(postal_code),
          phone_number,
          fax_number,
          website,
          e_mail,
          tax_document_type: type,
          tax_document_number,
          pic_name,
          picEmail,
          picMobileNumber,
        },
      });
      setAlert(true);
      setData(data);
      setShowSuccess(true);
      setMessageSuccess(data && data.registerNewVendor);
      setShowError(false);
    } catch {
      setShowError(true);
      setShowSuccess(false);
      setError("vendor code not avaiable!");
    }
  };
  
  return (
    <RegistrationProvider
      value={{
        _handleSubmitRegister,
        loadingRegister,
        data,
        error,
        showError,
        showSuccess,
        messageSuccess,
        alert,
        setAlert,
        CheckboxRegister,
        handleSubmit,
        register,
        errors,
        _onSubmit,
        customStyles,
        listClassification,
        national,
        Indonesia,
        Yogyakarta,
        Sleman,
        vendor_type,
        setVendor_type,
        name,
        setName,
        owner,
        setOwner,
        business_type,
        setBusiness_type,
        address,
        setAddress,
        country,
        setCountry,
        province,
        setProvince,
        city,
        setCity,
        district,
        setDistrict,
        postal_code,
        setPostal_code,
        phone_number,
        setPhone_number,
        phone_numberExt,
        setPhone_numberExt,
        fax_number,
        setFax_number,
        fax_numberExt,
        setFax_numberExt,
        e_mail,
        setE_mail,
        website,
        setWebsite,
        pic_name,
        setPic_name,
        picMobileNumber,
        setPicMobileNumber,
        picEmail,
        setPicEmail,
        tenderReferenceNumber,
        pkpNumber,
        setPkpNumber,
        pkpAttachment,
        setPkpAttachment,
        setTenderReferenceNumber,
        tax_document_number,
        setTax_document_number,
        tax_document_type,
        setTax_document_type,
        errPkpAttachment,
        setErrPkpAttachment,
        errTax_document_type,
        setErrTax_document_type,
        recaptcha,
        setRecaptcha,
        handleFilePkp,
        handleErrFilePkp,
        handleFileTaxId,
        handleErrFileTaxId,
        recaptchaRef,
        isBtnDissabled,
        checkbox,
        setCheckbox,
        open,
        setOpen,
      }}
    >
      {children}
    </RegistrationProvider>
  );
};
