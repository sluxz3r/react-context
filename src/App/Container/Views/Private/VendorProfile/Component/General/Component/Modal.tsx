import React, { useContext } from "react";
import { ErrorMessage } from "react-hook-form";
import Select from "react-select";
import { GeneralContext } from "../Controller";

const ModalComponent = () => {
  const {
    customStyles,
    register,
    errors,
    setBranchName,
    setAddress,
    country,
    setCountry,
    province,
    setProvince,
    city,
    setCity,
    setSubDistrict,
    setPostalCode,
    setPhoneNumber,
    setPhoneNumberExt,
    setFaxNumber,
    setFaxNumberExt,
    setCompanyEmail,
    optionsCompanyType,
    Indonesia,
    Yogya,
    Sleman,
  } = useContext(GeneralContext);

  return (
    <div className="bg-white">
      <div className="block text-xs">
        <div className="py-1 px-4 mt-6">
          <span className="text-gray-900 text-2xl">Use as Branch Office</span>
        </div>
        <form>
          <div className="w-full">
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
              <div className="w-full py-4">
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label>Nama Cabang/Lokasi Cabang</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    <input
                      type="text"
                      name="branchName"
                      ref={register({
                        required: "This is required",
                        minLength: {
                          value: 8,
                          message: "This inpus is less than 8 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "This inpus is more than 30 characters",
                        },
                      })}
                      onChange={(val) => setBranchName(val.target.value)}
                      className="w-full bg-white border border-gray-400 hover:border-gray-500 py-1 px-2"
                      placeholder="Nama Cabang/Lokasi Cabang"
                    />
                    <ErrorMessage errors={errors} name="branchName">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p key={type} className="px-2 text-sm text-red-500">
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label>Alamat</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    <textarea
                      className="w-full bg-white border border-gray-400 hover:border-gray-500 py-1 px-2"
                      placeholder="Alamat"
                      name="address"
                      ref={register({
                        required: "This is required",
                        minLength: {
                          value: 8,
                          message: "This inpus is less than 8 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "This inpus is more than 30 characters",
                        },
                      })}
                      onChange={(val) => setAddress(val.target.value)}
                    />
                    <ErrorMessage errors={errors} name="address">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p key={type} className="px-2 text-sm text-red-500">
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label className="w-full">Negara</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                    <Select
                      styles={customStyles}
                      name="country"
                      isClearable
                      ref={register({
                        required: "This is required",
                        minLength: {
                          value: 8,
                          message: "This inpus is less than 8 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "This inpus is more than 30 characters",
                        },
                      })}
                      onChange={(val) =>
                        val ? setCountry(val.value) : setCountry("")
                      }
                      options={optionsCompanyType}
                      placeholder="Negara"
                    />
                    <ErrorMessage errors={errors} name="country">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p key={type} className="px-2 text-sm text-red-500">
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label className="w-full">Provinsi</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                    <Select
                      styles={customStyles}
                      name="province"
                      isClearable
                      ref={register({
                        required: "This is required",
                        minLength: {
                          value: 8,
                          message: "This inpus is less than 8 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "This inpus is more than 30 characters",
                        },
                      })}
                      onChange={(val) =>
                        val ? setProvince(val.value) : setProvince("")
                      }
                      options={country === "Indonesia" ? Indonesia : null}
                      placeholder="Provinsi"
                      isDisabled={country ? false : true}
                    />
                    <ErrorMessage errors={errors} name="province">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p key={type} className="px-2 text-sm text-red-500">
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label className="w-full">Kota/Kabupaten</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                    <Select
                      styles={customStyles}
                      name="city"
                      isClearable
                      ref={register({
                        required: "This is required",
                        minLength: {
                          value: 8,
                          message: "This inpus is less than 8 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "This inpus is more than 30 characters",
                        },
                      })}
                      // value={Yogya.find((val) => val.value === city)}
                      onChange={(val) =>
                        val ? setCity(val.value) : setCity("")
                      }
                      options={Yogya}
                      placeholder="Kota/Kabupaten"
                      isDisabled={country && province ? false : true}
                    />
                    <ErrorMessage errors={errors} name="city">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p key={type} className="px-2 text-sm text-red-500">
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label className="w-full">Kecamatan</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                    <Select
                      styles={customStyles}
                      name="subDistrict"
                      isClearable
                      ref={register({
                        required: "This is required",
                        minLength: {
                          value: 8,
                          message: "This inpus is less than 8 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "This inpus is more than 30 characters",
                        },
                      })}
                      onChange={(val) =>
                        val ? setSubDistrict(val.value) : setSubDistrict("")
                      }
                      options={city === "Sleman" ? Sleman : null}
                      placeholder="Kecamatan"
                      isDisabled={country && province && city ? false : true}
                    />
                    <ErrorMessage errors={errors} name="subDistrict">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p key={type} className="px-2 text-sm text-red-500">
                              {message}
                            </p>
                          ))
                        );
                      }}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label>Kode Pos</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    <input
                      type="number"
                      name="postalCode"
                      ref={register({
                        required: "This is required",
                        minLength: {
                          value: 8,
                          message: "This inpus is less than 8 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "This inpus is more than 30 characters",
                        },
                      })}
                      onChange={(val) => setPostalCode(val.target.value)}
                      className="w-full appearance-none bg-white border border-gray-400 hover:border-gray-500 py-1 px-2"
                      placeholder="Kode Pos"
                    />
                    <ErrorMessage errors={errors} name="postalCode">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p key={type} className="px-2 text-sm text-red-500">
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
              <div className="w-full py-4">
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row py-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label>Nomor Telepon</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex justify-start">
                    <div className="w-3/5 flex-col mr-8">
                      <input
                        name="phoneNumber"
                        ref={register({
                          required: "This is required",
                          minLength: {
                            value: 8,
                            message: "This inpus is less than 8 characters",
                          },
                          maxLength: {
                            value: 30,
                            message: "This inpus is more than 30 characters",
                          },
                          pattern: /^\+{1}[62]{2}[0-9]{1,20}$/i,
                        })}
                        onChange={(val) => setPhoneNumber(val.target.value)}
                        className="w-full bg-white border border-gray-400 hover:border-gray-500 py-1 px-2"
                        placeholder="+62xx-xxxxxxxxxxxx"
                      />
                      <ErrorMessage errors={errors} name="phoneNumber">
                        {({ messages }) => {
                          return (
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                              <p
                                key={type}
                                className="px-2 text-sm text-red-500"
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
                        name="phoneNumberExt"
                        ref={register({
                          minLength: {
                            value: 8,
                            message: "This inpus is less than 8 characters",
                          },
                          maxLength: {
                            value: 30,
                            message: "This inpus is more than 30 characters",
                          },
                        })}
                        onChange={(val) => setPhoneNumberExt(val.target.value)}
                        className="w-full bg-white border border-gray-400 hover:border-gray-500 py-1 px-2"
                        placeholder="Ext."
                      />
                      <ErrorMessage errors={errors} name="phoneNumberExt">
                        {({ messages }) => {
                          return (
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                              <p
                                key={type}
                                className="px-2 text-sm text-red-500"
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
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label>Nomor Faksimile</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex justify-start">
                    <div className="w-3/5 flex-col mr-8">
                      <input
                        type="number"
                        name="faxNumber"
                        ref={register({
                          required: "This is required",
                          minLength: {
                            value: 8,
                            message: "This inpus is less than 8 characters",
                          },
                          maxLength: {
                            value: 30,
                            message: "This inpus is more than 30 characters",
                          },
                        })}
                        onChange={(val) => setFaxNumber(val.target.value)}
                        className="w-full bg-white border border-gray-400 hover:border-gray-500 py-1 px-2"
                        placeholder="Nomor Faksimile"
                      />
                      <ErrorMessage errors={errors} name="faxNumber">
                        {({ messages }) => {
                          return (
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                              <p
                                key={type}
                                className="px-2 text-sm text-red-500"
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
                        name="faxNumberExt"
                        ref={register({
                          minLength: {
                            value: 8,
                            message: "This inpus is less than 8 characters",
                          },
                          maxLength: {
                            value: 30,
                            message: "This inpus is more than 30 characters",
                          },
                        })}
                        onChange={(val) => setFaxNumberExt(val.target.value)}
                        className="w-full bg-white border border-gray-400 hover:border-gray-500 py-1 px-2"
                        placeholder="Ext."
                      />
                      <ErrorMessage errors={errors} name="faxNumberExt">
                        {({ messages }) => {
                          return (
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                              <p
                                key={type}
                                className="px-2 text-sm text-red-500"
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
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label>E-mail Perusahaan</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    <input
                      type="text"
                      name="companyEmail"
                      ref={register({
                        required: "This is required",
                        minLength: {
                          value: 8,
                          message: "This inpus is less than 8 characters",
                        },
                        maxLength: {
                          value: 30,
                          message: "This inpus is more than 30 characters",
                        },
                      })}
                      onChange={(val) => setCompanyEmail(val.target.value)}
                      className="w-full bg-white border border-gray-400 hover:border-gray-500 py-1 px-2"
                      placeholder="me@example.com"
                    />
                    <ErrorMessage errors={errors} name="companyEmail">
                      {({ messages }) => {
                        return (
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <p key={type} className="px-2 text-sm text-red-500">
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
          </div>
          <hr />
        </form>
      </div>
    </div>
  );
};

export default ModalComponent;
