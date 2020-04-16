import React, { useContext } from "react";
import { RegistrationContext } from "../Controller";
import { ErrorMessage } from "react-hook-form";
import Select from "react-select";
import InputMask from "react-input-mask";
import ReCAPTCHA from "react-google-recaptcha";
import TermsAndConditions from "./Terms&Conditions";
import { Modal } from "../../../../Components";
import "../../../../Assets/Css/App.css";
import { CircularProgress } from "@material-ui/core";

const RegistrationComponent = () => {
  const {
    CheckboxRegister,
    customStyles,
    errors,
    loadingRegister,
    messageSuccess,
    alert,
    setAlert,
    handleSubmit,
    _handleSubmitRegister,
    register,
    setVendor_type,
    countries,
    provinces,
    Yogyakarta,
    Sleman,
    vendor_type,
    setName,
    setOwner,
    setBusiness_type,
    listClassification,
    setAddress,
    setCountry,
    country,
    province,
    setProvince,
    city,
    setCity,
    setDistrict,
    setPostal_code,
    setPhone_number,
    setPhone_numberExt,
    setFax_number,
    setFax_numberExt,
    setE_mail,
    setWebsite,
    setPic_name,
    setPicMobileNumber,
    setPicEmail,
    setTenderReferenceNumber,
    setPkpNumber,
    handleFilePkp,
    handleErrFilePkp,
    handleFileTaxId,
    handleErrFileTaxId,
    setTax_document_number,
    setRecaptcha,
    recaptchaRef,
    isBtnDissabled,
    checkbox,
    setCheckbox,
    open,
    setOpen,
    _onSubmit,
  } = useContext(RegistrationContext);

  return (
    <div className="block text-xs static overflow-y-auto">
      <div
        className={`${
          (alert === false || loadingRegister === true) && "hidden"
        } text-sm border-l-8 border-green-500 bg-green-100 border text-green-700 pl-8 pr-4 py-2 rounded relative items-center`}
        role="alert"
      >
        <span className="absolute top-0 bottom-0 left-0 py-2 pl-1">
          <svg
            className="fill-current h-5 w-5 text-green-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
            ></path>
          </svg>
        </span>
        <span>{messageSuccess}</span>
        <span className="absolute top-0 bottom-0 right-0 py-2 pr-1">
          <svg
            className="fill-current h-5 w-5 text-green-500"
            role="button"
            onClick={() => setAlert(false)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
      <form onSubmit={handleSubmit(_handleSubmitRegister)}>
        <div className="flex flex-row md:flex-col lg:flex-col">
          <div className="flex flex-row py-4">
            {/* Left */}
            <div className="block w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label className="w-full">Perusahaan Tipe</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  <select
                    name="vendor_type"
                    ref={register({
                      required: "This is required",
                    })}
                    onChange={(val) => setVendor_type(val.target.value)}
                    className="w-full bg-white border border-gray-400 hover:border-gray-500 py-1 px-2 rounded"
                  >
                    <option value="" hidden></option>
                    <option value="Asosiasi Profesi">Asosiasi Profesi</option>
                    <option value="Company">Company</option>
                    <option value="CV">CV</option>
                    <option value="KOPERASI">KOPERASI</option>
                    <option value="LEMBAGA">LEMBAGA</option>
                    <option value="PD">PD</option>
                    <option value="Perusahaan Daerah">Perusahaan Daerah</option>
                    <option value="PRIBADI">PRIBADI</option>
                    <option value="PT">PT</option>
                    <option value="PT. (Persero)">PT. (Persero)</option>
                    <option value="UD">UD</option>
                    <option value="Yayasan">Yayasan</option>
                  </select>
                  <ErrorMessage errors={errors} name="vendor_type">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label className="w-full">Nama Penyedia</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <div className="flex inline-block items-center">
                    <div className="w-auto bg-gray-400 border border-gray-400 py-1 px-2 rounded-l">
                      {vendor_type ? vendor_type : "Company"}
                    </div>
                    <input
                      type="text"
                      className={`w-full inline-block flex-1 block bg-white border ${
                        !errors ? "border-red-500" : "border-gray-400"
                      } hover:border-gray-500 py-1 px-2 rounded-r`}
                      placeholder="Nama Penyedia"
                      name="name"
                      ref={register({
                        required: "This is required",
                        minLength: {
                          value: 4,
                          message: "This input is less than 4 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "This input is more than 30 characters",
                        },
                      })}
                      onChange={(val) => setName(val.target.value)}
                    />
                  </div>
                  <ErrorMessage errors={errors} name="name">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Direktur Utama</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <input
                    type="text"
                    className={`w-full bg-white border ${
                      !errors ? "border-red-500" : "border-gray-400"
                    } hover:border-gray-500 rounded py-1 px-2`}
                    placeholder="Direktur Utama"
                    name="owner"
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                    })}
                    onChange={(val) => setOwner(val.target.value)}
                  />
                  <ErrorMessage errors={errors} name="owner">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="block w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label className="w-full">Bidang Usaha</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  <Select
                    name="business_type"
                    isClearable
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                    })}
                    onChange={(val) =>
                      val ? setBusiness_type(val.value) : setBusiness_type("")
                    }
                    options={listClassification}
                    placeholder="Bidang Usaha"
                    styles={customStyles}
                  />
                  <ErrorMessage errors={errors} name="business_type">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-row py-4">
            {/* Left */}
            <div className="block w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Alamat</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <textarea
                    className={`w-full bg-white border ${
                      !errors ? "border-red-500" : "border-gray-400"
                    } hover:border-gray-500 rounded py-1 px-2`}
                    placeholder="Alamat"
                    name="address"
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                    })}
                    onChange={(val) => setAddress(val.target.value)}
                  />
                  <ErrorMessage errors={errors} name="address">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label className="w-full">Negara</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  <Select
                    name="country"
                    isClearable
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                    })}
                    onChange={(val) =>
                      val ? setCountry(val.value) : setCountry("")
                    }
                    options={countries}
                    placeholder="Negara"
                    styles={customStyles}
                  />
                  <ErrorMessage errors={errors} name="country">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label className="w-full">Provinsi</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  {country === "Indonesia" || !country ? (
                    <div>
                      <Select
                        name="province"
                        isClearable
                        ref={register({
                          required: "This is required",
                        })}
                        onChange={(val) =>
                          val ? setProvince(val.value) : setProvince("")
                        }
                        options={provinces}
                        placeholder="Provinsi"
                        isDisabled={country ? false : true}
                        styles={customStyles}
                      />
                      <ErrorMessage errors={errors} name="province">
                        {({ messages }) => {
                          return (
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                              <p
                                key={type}
                                className="px-2 py-1 text-xs text-red-500"
                              >
                                {message}
                              </p>
                            ))
                          );
                        }}
                      </ErrorMessage>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="text"
                        className={`w-full bg-white border ${
                          !errors ? "border-red-500" : "border-gray-400"
                        } hover:border-gray-500 rounded py-1 px-2`}
                        placeholder="Provinsi"
                        disabled={country ? false : true}
                        name="province"
                        ref={register({
                          required: "This is required",
                          minLength: {
                            value: 4,
                            message: "This input is less than 4 characters",
                          },
                          maxLength: {
                            value: 30,
                            message: "This input is more than 30 characters",
                          },
                        })}
                        onChange={(val) =>
                          val ? setProvince(val.target.value) : setProvince("")
                        }
                      />
                      <ErrorMessage errors={errors} name="province">
                        {({ messages }) => {
                          return (
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                              <p
                                key={type}
                                className="px-2 py-1 text-xs text-red-500"
                              >
                                {message}
                              </p>
                            ))
                          );
                        }}
                      </ErrorMessage>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label className="w-full">Kota/Kabupaten</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  <Select
                    name="city"
                    isClearable
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                    })}
                    // value={Yogyakarta.find((val) => val.value === city)}
                    onChange={(val) => (val ? setCity(val.value) : setCity(""))}
                    options={Yogyakarta}
                    placeholder="Kota/Kabupaten"
                    isDisabled={country && province ? false : true}
                    styles={customStyles}
                  />
                  <ErrorMessage errors={errors} name="city">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label className="w-full">Kecamatan</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  <Select
                    name="district"
                    isClearable
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                    })}
                    onChange={(val) =>
                      val ? setDistrict(val.value) : setDistrict("")
                    }
                    options={city === "Sleman" ? Sleman : null}
                    placeholder="Kecamatan"
                    isDisabled={country && province && city ? false : true}
                    styles={customStyles}
                  />
                  <ErrorMessage errors={errors} name="district">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Kode Pos</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <input
                    type="number"
                    name="postal_code"
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                      pattern: {
                        value: /^\d+$/,
                        message: "This input is number 0-9",
                      },
                    })}
                    onChange={(val) => setPostal_code(val.target.value)}
                    className={`w-full bg-white border ${
                      !errors ? "border-red-500" : "border-gray-400"
                    } hover:border-gray-500 rounded py-1 px-2 no-arrow`}
                    placeholder="Kode Pos"
                  />
                  <ErrorMessage errors={errors} name="postal_code">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="block w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Nomor Telepon</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex justify-start">
                  <div className="w-3/5 flex-col mr-8">
                    <input
                      name="phone_number"
                      ref={register({
                        required: "This is required",
                        minLength: {
                          value: 4,
                          message: "This input is less than 4 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "This input is more than 30 characters",
                        },
                        pattern: {
                          value: /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/g,
                          message: "This input is number 0-9",
                        },
                      })}
                      onChange={(val) => setPhone_number(val.target.value)}
                      className={`w-full bg-white border ${
                        !errors ? "border-red-500" : "border-gray-400"
                      } hover:border-gray-500 rounded py-1 px-2`}
                      placeholder="+62xx-xxxxxxxxxxxx"
                    />
                    <ErrorMessage errors={errors} name="phone_number">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p
                              key={type}
                              className="px-2 py-1 text-xs text-red-500"
                            >
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="w-2/5 flex-col">
                    <input
                      name="phone_numberExt"
                      ref={register({
                        minLength: {
                          value: 4,
                          message: "This input is less than 4 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "This input is more than 30 characters",
                        },
                      })}
                      onChange={(val) => setPhone_numberExt(val.target.value)}
                      className={`w-full bg-white border ${
                        !errors ? "border-red-500" : "border-gray-400"
                      } hover:border-gray-500 rounded py-1 px-2`}
                      placeholder="Ext."
                    />
                    <ErrorMessage errors={errors} name="phone_numberExt">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p
                              key={type}
                              className="px-2 py-1 text-xs text-red-500"
                            >
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Nomor Faksimile</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex justify-start">
                  <div className="w-3/5 flex-col mr-8">
                    <input
                      type="number"
                      name="fax_number"
                      ref={register({
                        minLength: {
                          value: 4,
                          message: "This input is less than 4 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "This input is more than 30 characters",
                        },
                        pattern: {
                          value: /^\d+$/,
                          message: "This input is number 0-9",
                        },
                      })}
                      onChange={(val) => setFax_number(val.target.value)}
                      className={`w-full bg-white border ${
                        !errors ? "border-red-500" : "border-gray-400"
                      } hover:border-gray-500 rounded py-1 px-2 no-arrow`}
                      placeholder="Nomor Faksimile"
                    />
                    <ErrorMessage errors={errors} name="fax_number">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p
                              key={type}
                              className="px-2 py-1 text-xs text-red-500"
                            >
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="w-2/5 flex-col">
                    <input
                      type="number"
                      name="fax_numberExt"
                      ref={register({
                        minLength: {
                          value: 4,
                          message: "This input is less than 4 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "This input is more than 30 characters",
                        },
                        pattern: {
                          value: /^\d+$/,
                          message: "This input is number 0-9",
                        },
                      })}
                      onChange={(val) => setFax_numberExt(val.target.value)}
                      className={`w-full bg-white border ${
                        !errors ? "border-red-500" : "border-gray-400"
                      } hover:border-gray-500 rounded py-1 px-2 no-arrow`}
                      placeholder="Ext."
                    />
                    <ErrorMessage errors={errors} name="fax_numberExt">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p
                              key={type}
                              className="px-2 py-1 text-xs text-red-500"
                            >
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>E-mail Perusahaan</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <input
                    type="text"
                    name="e_mail"
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                    })}
                    onChange={(val) => setE_mail(val.target.value)}
                    className={`w-full bg-white border ${
                      !errors ? "border-red-500" : "border-gray-400"
                    } hover:border-gray-500 rounded py-1 px-2`}
                    placeholder="me@example.com"
                  />
                  <ErrorMessage errors={errors} name="e_mail">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Situs</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <input
                    type="text"
                    name="website"
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                    })}
                    onChange={(val) => setWebsite(val.target.value)}
                    className={`w-full bg-white border ${
                      !errors ? "border-red-500" : "border-gray-400"
                    } hover:border-gray-500 rounded py-1 px-2`}
                    placeholder="example.com"
                  />
                  <ErrorMessage errors={errors} name="website">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Nama Lengkap PIC</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <input
                    type="text"
                    name="pic_name"
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                    })}
                    onChange={(val) => setPic_name(val.target.value)}
                    className={`w-full bg-white border ${
                      !errors ? "border-red-500" : "border-gray-400"
                    } hover:border-gray-500 rounded py-1 px-2`}
                    placeholder="Nama Lengkap PIC"
                  />
                  <ErrorMessage errors={errors} name="pic_name">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Nomor Telepon Seluler PIC</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <input
                    type="text"
                    name="picMobileNumber"
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                      pattern: {
                        value: /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/g,
                        message: "This input is number 0-9",
                      },
                    })}
                    onChange={(val) => setPicMobileNumber(val.target.value)}
                    className={`w-full bg-white border ${
                      !errors ? "border-red-500" : "border-gray-400"
                    } hover:border-gray-500 rounded py-1 px-2 no-arrow`}
                    placeholder="+62xx-xxxxxxxxxxxx"
                  />
                  <ErrorMessage errors={errors} name="picMobileNumber">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Email PIC</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <input
                    type="email"
                    name="picEmail"
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                    })}
                    onChange={(val) => setPicEmail(val.target.value)}
                    className={`w-full bg-white border ${
                      !errors ? "border-red-500" : "border-gray-400"
                    } hover:border-gray-500 rounded py-1 px-2`}
                    placeholder="sales/marketing@example.com"
                  />
                  <ErrorMessage errors={errors} name="picEmail">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-row py-4">
            {/* Left */}
            <div className="block w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Referensi Nomor Pengadaan (Jika Ada)</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <input
                    type="number"
                    name="tenderReferenceNumber"
                    ref={register({
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                      pattern: {
                        value: /^\d+$/,
                        message: "This input is number 0-9",
                      },
                    })}
                    onChange={(val) =>
                      setTenderReferenceNumber(val.target.value)
                    }
                    className={`w-full bg-white border ${
                      !errors ? "border-red-500" : "border-gray-400"
                    } hover:border-gray-500 rounded py-1 px-2 no-arrow`}
                    placeholder="Referensi Nomor Pengadaan (Jika Ada)"
                  />
                  <ErrorMessage errors={errors} name="tenderReferenceNumber">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="block w-1/2"></div>
          </div>
          <hr />
          <div className="flex flex-row py-4">
            {/* Left */}
            <div className="block w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div
                  className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"
                  hidden={country === "Zimbabwe" ? false : true}
                >
                  <label>Nomor PKP</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <input
                    type="number"
                    name="pkpNumber"
                    ref={register({
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                      pattern: {
                        value: /^\d+$/,
                        message: "This input is number 0-9",
                      },
                    })}
                    onChange={(val) => setPkpNumber(val.target.value)}
                    className={`w-full bg-white border ${
                      !errors ? "border-red-500" : "border-gray-400"
                    } hover:border-gray-500 rounded py-1 px-2 no-arrow`}
                    placeholder="Nomor PKP"
                    hidden={country === "Zimbabwe" ? false : true}
                  />
                  <ErrorMessage errors={errors} name="pkpNumber">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className={`${
                              country === "Zimbabwe" ? "hidden" : ""
                            }} px-2 py-1 text-xs text-red-500`}
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div
                  className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"
                  hidden={country === "Zimbabwe" ? false : true}
                >
                  <label>Lampiran PKP</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 block items-center">
                  <input
                    type="file"
                    name="pkpAttachment"
                    accept="application/pdf"
                    ref={register({
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                    })}
                    onChange={(val: any) => {
                      val.target.files[0]
                        ? handleFilePkp(val)
                        : handleErrFilePkp();
                    }}
                    className={`w-full bg-white border ${
                      !errors ? "border-red-500" : "border-gray-400"
                    } hover:border-gray-500 rounded py-1 px-2`}
                    hidden={country === "Zimbabwe" ? false : true}
                  />
                  <label
                    className="text-gray-700 italic text-xs"
                    hidden={country === "Zimbabwe" ? false : true}
                  >
                    File Extensi: ["pdf"].(Maks.: 2 MB)
                  </label>
                  <ErrorMessage errors={errors} name="pkpAttachment">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className={`${
                              country === "provinces" ? "hidden" : ""
                            }} px-2 py-1 text-xs text-red-500`}
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="block w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Nomor NPWP</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <InputMask
                    mask="99.999.999.9-999.999"
                    maskChar="_"
                    name="tax_document_number"
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                    })}
                    onChange={(val) => {
                      setTax_document_number(val.target.value);
                    }}
                    className={`w-full bg-white border ${
                      !errors ? "border-red-500" : "border-gray-400"
                    } hover:border-gray-500 rounded py-1 px-2`}
                    placeholder="Nomor NPWP"
                  />
                  <ErrorMessage errors={errors} name="vendor_type">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Lampiran NPWP</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 block items-center">
                  <input
                    type="file"
                    name="tax_document_type"
                    accept="application/pdf"
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "This input is less than 4 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "This input is more than 30 characters",
                      },
                    })}
                    onChange={(val: any) => {
                      val.target.files[0]
                        ? handleFileTaxId(val)
                        : handleErrFileTaxId();
                    }}
                    className={`w-full bg-white border ${
                      !errors ? "border-red-500" : "border-gray-400"
                    } hover:border-gray-500 rounded py-1 px-2`}
                  />
                  <label className="text-gray-700 italic text-xs">
                    File Extensi: ["pdf"].(Maks.: 2 MB)
                  </label>
                  <ErrorMessage errors={errors} name="tax_document_type">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 block items-center">
                  <ReCAPTCHA
                    name="recaptcha"
                    ref={recaptchaRef}
                    sitekey="6LeCieEUAAAAAGsekrptO7GxjXpCEHLoHV8UVmuo"
                    onErrored={() => {
                      setCheckbox(false);
                      setRecaptcha(false);
                    }}
                    onChange={() => setRecaptcha(true)}
                    onExpired={() => {
                      setCheckbox(false);
                      setRecaptcha(false);
                    }}
                  />
                  <ErrorMessage errors={errors} name="recaptcha">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="px-2 py-1 text-xs text-red-500"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-row py-4">
            {/* Left */}
            <div className="block w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-auto xl:w-auto mx-4">
                  <div
                    className={`${
                      isBtnDissabled
                        ? "bg-gray-600"
                        : "cursor-pointer bg-blue-700"
                    } text-white rounded text-sm pr-4`}
                    onClick={
                      isBtnDissabled
                        ? undefined
                        : checkbox === false
                        ? () => setOpen(true)
                        : handleSubmit(_handleSubmitRegister)
                    }
                    onMouseEnter={
                      isBtnDissabled ? handleSubmit(_onSubmit) : undefined
                    }
                    title="Harap lengkapi form dan checklist!"
                  >
                    {loadingRegister === false ? (
                      <span>
                        <CheckboxRegister
                          size="small"
                          disabled
                          checked={checkbox}
                        />
                        Syarat & Ketentuan
                      </span>
                    ) : (
                      <div className="w-32 text-center py-1">
                        <CircularProgress color="inherit" size={20} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="block w-1/2"></div>
          </div>
        </div>
        <Modal
          title="SYARAT & KETENTUAN"
          actionButton2={
            <button
              className="bg-blue-700 hover:bg-blue-800 border border-gray-700 text-white px-4 py-1 text-sm m-2 rounded"
              onClick={() => {
                setCheckbox(true);
                setOpen(false);
              }}
            >
              Lanjutkan Pendaftaran
            </button>
          }
          actionButton={
            <button
              className="bg-white hover:bg-gray-400 hover:border-gray-500 border border-gray-400 text-gray-900 px-4 py-1 text-sm m-2 rounded"
              onClick={() => {
                setCheckbox(false);
                setOpen(false);
              }}
            >
              Batalkan
            </button>
          }
          content={<TermsAndConditions />}
          openModal={open}
        />
      </form>
    </div>
  );
};

export default RegistrationComponent;
