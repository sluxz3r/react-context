import React, { useContext } from "react";
import { RegistrationContext } from "../Controller";
import { ErrorMessage, useFormContext, useForm } from "react-hook-form";
import Select from "react-select";
import ReCAPTCHA from "react-google-recaptcha";
import TermsAndConditions from "./Terms&Conditions";
import "../../../../Assets/Css/App.css";
import { Modal } from "../../../../Components";

const RegistrationComponent = () => {
  const {
    customStyles,
    loadingRegister,
    messageSuccess,
    alert,
    setAlert,
    registerValidation,
    _handleOnSubmitSelect,
    _handleSubmitRegister,
    _handleBussinessType,
    _handleCountry,
    _handleProvince,
    _handleCity,
    _handleDistrict,
    setVendor_type,
    countries,
    provinces,
    cities,
    Sleman,
    vendor_type,
    setName,
    setOwner,
    listClassification,
    setAddress,
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
    recaptcha,
    _onValidate,
    validate,
  } = useContext(RegistrationContext);
  const { register, handleSubmit, errors, triggerValidation } = useForm({
    validateCriteriaMode: "all",
    mode: "onChange",
  });
  const { errors: errorsSelect } = useFormContext();

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
      <div className="flex flex-row md:flex-col lg:flex-col">
        <form onSubmit={handleSubmit(_onValidate())}>
          <div className="flex flex-col md:flex-row lg:flex-row py-4">
            {/* Left */}
            <div className="block w-full md:w-1/2 lg:w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
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
                    className="border-gray-500 w-full bg-white border border-gray-400 hover:border-gray-500 py-1 px-2 rounded"
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
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="vendor_type">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
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
                      className="w-full inline-block flex-1 block bg-white border border-gray-500 hover:border-gray-500 py-1 px-2 rounded-r"
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
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="name">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Direktur Utama</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2"
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
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="owner">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
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
            <div className="block w-full md:w-1/2 lg:w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label className="w-full">Bidang Usaha</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  <Select
                    className="business_type"
                    name="business_type"
                    isClearable
                    onChange={_handleBussinessType}
                    options={listClassification}
                    placeholder="Bidang Usaha"
                    styles={customStyles}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  {errorsSelect.business_type && (
                    <p className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b">
                      This is required
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row lg:flex-row py-4">
            {/* Left */}
            <div className="block w-full md:w-1/2 lg:w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Alamat</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <textarea
                    className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2"
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
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label className="w-full">Negara</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  <Select
                    className="country"
                    name="country"
                    isClearable
                    onChange={_handleCountry}
                    options={countries}
                    placeholder="Negara"
                    styles={customStyles}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  {errorsSelect.country && (
                    <p className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b">
                      This is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label className="w-full">Provinsi</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  {country === "Indonesia" || !country ? (
                    <Select
                      className="province"
                      name="province"
                      isClearable
                      onChange={_handleProvince}
                      options={provinces}
                      placeholder="Provinsi"
                      styles={customStyles}
                      isDisabled={country ? false : true}
                    />
                  ) : (
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2"
                      placeholder="Provinsi"
                      disabled={country ? false : true}
                      name="province"
                      ref={register({
                        required: "This is required",
                      })}
                      onChange={(val) =>
                        val ? setProvince(val.target.value) : setProvince("")
                      }
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  {country === "Indonesia" || !country ? (
                    errorsSelect.province && (
                      <div className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b">
                        <span>This is required</span>
                      </div>
                    )
                  ) : (
                    <ErrorMessage errors={errors} name="province">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p
                              key={type}
                              className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                            >
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label className="w-full">Kota/Kabupaten</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  {province === "DI Yogyakarta" || !province ? (
                    <Select
                      className="city"
                      name="city"
                      isClearable
                      onChange={_handleCity}
                      options={cities}
                      placeholder="Kota/Kabupaten"
                      styles={customStyles}
                      isDisabled={country && province ? false : true}
                    />
                  ) : (
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2"
                      placeholder="Kota/Kabupaten"
                      disabled={country && province ? false : true}
                      name="city"
                      ref={register({
                        required: "This is required",
                      })}
                      onChange={(val) =>
                        val ? setCity(val.target.value) : setCity("")
                      }
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  {province === "DI Yogyakarta" || !province ? (
                    errorsSelect.city && (
                      <div className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b">
                        <span>This is required</span>
                      </div>
                    )
                  ) : (
                    <ErrorMessage errors={errors} name="city">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p
                              key={type}
                              className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                            >
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label className="w-full">Kecamatan</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  {city === "Kab. Sleman" || !city ? (
                    <Select
                      className="district"
                      name="district"
                      isClearable
                      onChange={_handleDistrict}
                      options={Sleman}
                      placeholder="Kecamatan"
                      styles={customStyles}
                      isDisabled={country && province && city ? false : true}
                    />
                  ) : (
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2"
                      placeholder="Kecamatan"
                      disabled={country && province && city ? false : true}
                      name="district"
                      ref={register({
                        required: "This is required",
                      })}
                      onChange={(val) =>
                        val ? setDistrict(val.target.value) : setDistrict("")
                      }
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                  {city === "Kab. Sleman" || !city ? (
                    errorsSelect.district && (
                      <div className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b">
                        <span>This is required</span>
                      </div>
                    )
                  ) : (
                    <ErrorMessage errors={errors} name="district">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p
                              key={type}
                              className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                            >
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
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
                    className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2 no-arrow"
                    placeholder="Kode Pos"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="postal_code">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
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
            <div className="block w-full md:w-1/2 lg:w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
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
                      className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2"
                      placeholder="+62xx-xxxxxxxxxxxx"
                    />
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
                        pattern: {
                          value: /^\d+$/,
                          message: "This input is number 0-9",
                        },
                      })}
                      onChange={(val) => setPhone_numberExt(val.target.value)}
                      className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2"
                      placeholder="Ext."
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex justify-start">
                  <div className="w-3/5 flex-col mr-8">
                    <ErrorMessage errors={errors} name="phone_number">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p
                              key={type}
                              className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                            >
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="w-2/5 flex-col">
                    <ErrorMessage errors={errors} name="phone_numberExt">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p
                              key={type}
                              className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
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
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
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
                      className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2 no-arrow"
                      placeholder="Nomor Faksimile"
                    />
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
                      className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2 no-arrow"
                      placeholder="Ext."
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex justify-start">
                  <div className="w-3/5 flex-col mr-8">
                    <ErrorMessage errors={errors} name="fax_number">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p
                              key={type}
                              className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                            >
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="w-2/5 flex-col">
                    <ErrorMessage errors={errors} name="fax_numberExt">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p
                              key={type}
                              className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
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
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
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
                    className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2"
                    placeholder="me@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="e_mail">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
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
                    className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2"
                    placeholder="example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="website">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
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
                    className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2"
                    placeholder="Nama Lengkap PIC"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="pic_name">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
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
                    className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2 no-arrow"
                    placeholder="+62xx-xxxxxxxxxxxx"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="picMobileNumber">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
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
                    className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2"
                    placeholder="sales/marketing@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="picEmail">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
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
          <div className="flex flex-col md:flex-row lg:flex-row py-4">
            {/* Left */}
            <div className="block w-full md:w-1/2 lg:w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
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
                    className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2 no-arrow"
                    placeholder="Referensi Nomor Pengadaan (Jika Ada)"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="tenderReferenceNumber">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
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
            <div className="block w-full md:w-1/2 lg:w-1/2"></div>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row lg:flex-row py-4">
            {/* Left */}
            <div className="block w-full md:w-1/2 lg:w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                <div
                  className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"
                  hidden={country === "Indonesia" ? false : true}
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
                    className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2 no-arrow"
                    placeholder="Nomor PKP"
                    hidden={country === "Indonesia" ? false : true}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="pkpNumber">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                <div
                  className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"
                  hidden={country === "Indonesia" ? false : true}
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
                    className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2"
                    hidden={country === "Indonesia" ? false : true}
                  />
                  <label
                    className="text-gray-700 italic text-xs"
                    hidden={country === "Indonesia" ? false : true}
                  >
                    File Extensi: ["pdf"].(Maks.: 2 MB)
                  </label>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="pkpAttachment">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
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
            <div className="block w-full md:w-1/2 lg:w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right">
                  <label>Nomor NPWP</label>
                </div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <input
                    type="number"
                    name="tax_document_number"
                    ref={register({
                      required: "This is required",
                      minLength: {
                        value: 15,
                        message: "This input is less than 15 characters",
                      },
                      maxLength: {
                        value: 15,
                        message: "This input is more than 15 characters",
                      },
                      pattern: {
                        value: /^\d+$/,
                        message: "This input is number 0-9",
                      },
                    })}
                    onChange={(val) => setTax_document_number(val.target.value)}
                    className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2 no-arrow"
                    placeholder="Nomor NPWP"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="tax_document_number">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
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
                    })}
                    onChange={(val: any) => {
                      val.target.files[0]
                        ? handleFileTaxId(val)
                        : handleErrFileTaxId();
                    }}
                    className="w-full bg-white border border-gray-500 hover:border-gray-500 rounded py-1 px-2"
                  />
                  <label className="text-gray-700 italic text-xs">
                    File Extensi: ["pdf"].(Maks.: 2 MB)
                  </label>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                  <ErrorMessage errors={errors} name="tax_document_type">
                    {({ messages }) => {
                      return (
                        messages &&
                        Object.entries(messages).map(([type, message]) => (
                          <p
                            key={type}
                            className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b"
                          >
                            {message}
                          </p>
                        ))
                      );
                    }}
                  </ErrorMessage>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
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
                  {recaptcha === false && validate === true && (
                    <p className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b">
                      This is required
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row lg:flex-row py-4">
            {/* Left */}
            <div className="block w-full md:w-1/2 lg:w-1/2">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2">
                <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4"></div>
                <div className="w-full sm:w-2/3 md:w-2/3 lg:w-auto xl:w-auto mx-4">
                  <button
                    type="submit"
                    className={`${
                      isBtnDissabled
                        ? "bg-gray-600"
                        : "cursor-pointer bg-blue-700"
                    } text-white rounded text-sm pr-4 items-center`}
                    onClick={
                      isBtnDissabled
                        ? async () => {
                            _handleOnSubmitSelect();
                            handleSubmit(
                              _onSubmit(
                                await triggerValidation(registerValidation)
                              )
                            );
                          }
                        : checkbox === false
                        ? () => setOpen(true)
                        : async () => {
                            handleSubmit(
                              _handleSubmitRegister(
                                await triggerValidation(registerValidation)
                              )
                            );
                          }
                    }
                    title="Harap lengkapi form dan checklist!"
                  >
                    {loadingRegister === false ? (
                      <div className="inline-flex items-center pt-1">
                        {checkbox === false ? (
                          <svg
                            className="fill-current w-4 mx-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            className="fill-current w-4 mx-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"
                            ></path>
                          </svg>
                        )}
                        <span>Syarat & Ketentuan</span>
                      </div>
                    ) : (
                      <span>Loading...</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="block w-full md:w-1/2 lg:w-1/2"></div>
          </div>
        </form>
      </div>
      <Modal
        title="Syarat & Ketentuan"
        open={open}
        onClose={() => {
          setOpen(false);
          setCheckbox(false);
        }}
        onActionOne={() => {
          setOpen(false);
        }}
        onActionTwo={() => {
          setCheckbox(true);
          setOpen(false);
        }}
        textOne="Batal"
        textTwo="Lanjutkan Pendaftaran"
      >
        <TermsAndConditions />
      </Modal>
    </div>
  );
};

export default RegistrationComponent;
