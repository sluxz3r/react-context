import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import Select from "react-select";
import { GeneralContext } from "../Controller";

const ModalComponent = () => {
  const {
    customStyles,
    setBranchName,
    setAddress,
    country,
    setCountry,
    province,
    setProvince,
    city,
    setCity,
    setDistrict,
    setPostalCode,
    setPhoneNumber,
    setPhoneNumberExt,
    setFaxNumber,
    setFaxNumberExt,
    setWebsite,
    setCompanyEmail,
    optionsCompanyType,
    Indonesia,
    Yogya,
    Sleman,
    register,
  } = useContext(GeneralContext);
  const { errors } = useFormContext();

  return (
    <div className="bg-white">
      <div className="block text-xs">
        <div className="py-1 px-4 mt-6">
          <span className="text-gray-900 text-2xl">Use as Branch Office</span>
        </div>
        <form onSubmit={handleSubmit(_onValidate())}>
          <div className="w-full">
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
              <div className="w-full py-4">
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                  <div className="w-full leading-none sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label>Nama Cabang/Lokasi Cabang</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    <input
                      type="text"
                      name="branchName"
                      ref={registerSelect({
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
                      className="w-full bg-white border border-gray-400 rounded hover:border-gray-500 py-1 px-2"
                      placeholder="Nama Cabang/Lokasi Cabang"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold"></div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    {errors.branchName && (
                      <p className="px-2 bg-red-200 rounded-b text-xs py-1 text-red-500">
                        {errors.branchName && errors.branchName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label>Alamat</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    <textarea
                      className="w-full bg-white border border-gray-400 rounded hover:border-gray-500 py-1 px-2"
                      placeholder="Alamat"
                      name="address"
                      ref={registerSelect({
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
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold"></div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    {errors.address && (
                      <p className="px-2 bg-red-200 rounded-b text-xs py-1 text-red-500">
                        {errors.address && errors.address.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label className="w-full">Negara</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                    <Select
                      styles={customStyles}
                      className="country"
                      name="country"
                      isClearable
                      onChange={(val) =>
                        val ? setCountry(val.value) : setCountry("")
                      }
                      options={optionsCompanyType}
                      placeholder="Negara"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold"></div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                    {errors.country && (
                      <p className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b">
                        This is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label className="w-full">Provinsi</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                    <Select
                      styles={customStyles}
                      className="province"
                      name="province"
                      isClearable
                      ref={registerSelect({
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
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold"></div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                    {errors.country && (
                      <p className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b">
                        This is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label className="w-full">Kota/Kabupaten</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                    <Select
                      styles={customStyles}
                      className="city"
                      name="city"
                      isClearable
                      ref={registerSelect({
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
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold"></div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                    {errors.country && (
                      <p className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b">
                        This is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label className="w-full">Kecamatan</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                    <Select
                      styles={customStyles}
                      className="district"
                      name="district"
                      isClearable
                      ref={registerSelect({
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
                        val ? setDistrict(val.value) : setDistrict("")
                      }
                      options={city === "Sleman" ? Sleman : null}
                      placeholder="Kecamatan"
                      isDisabled={country && province && city ? false : true}
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold"></div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 justify-start">
                    {errors.country && (
                      <p className="bg-red-200 px-2 py-1 text-xs text-red-500 rounded-b">
                        This is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label>Kode Pos</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    <input
                      type="number"
                      name="postalCode"
                      ref={registerSelect({
                        required: "This is required",
                        minLength: {
                          value: 5,
                          message: "This input is less than 5 characters",
                        },
                        maxLength: {
                          value: 5,
                          message: "This input is more than 5 characters",
                        },
                        pattern: {
                          value: /^\d+$/,
                          message: "This input is number 0-9",
                        },
                      })}
                      onChange={(val) => setPostalCode(val.target.value)}
                      className="w-full rounded bg-white border border-gray-400 hover:border-gray-500 py-1 px-2 no-arrow"
                      placeholder="Kode Pos"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold"></div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    {errors.postalCode && (
                      <p className="px-2 bg-red-200 rounded-b text-xs py-1 text-red-500">
                        {errors.postalCode && errors.postalCode.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="w-full py-4">
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label>Nomor Telepon</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex justify-start">
                    <div className="w-3/5 flex-col mr-8">
                      <input
                        name="phoneNumber"
                        ref={registerSelect({
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
                        onChange={(val) => setPhoneNumber(val.target.value)}
                        className="w-full bg-white border border-gray-400 rounded hover:border-gray-500 py-1 px-2"
                        placeholder="+62xx-xxxxxxxxxxxx"
                      />
                    </div>
                    <div className="w-2/5 flex-col">
                      <input
                        name="phoneNumberExt"
                        ref={registerSelect({
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
                        onChange={(val) => setPhoneNumberExt(val.target.value)}
                        className="w-full bg-white border border-gray-400 rounded hover:border-gray-500 py-1 px-2"
                        placeholder="Ext."
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold"></div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex justify-start">
                    <div className="w-3/5 flex-col mr-8">
                      {errors.phoneNumber && (
                        <p className="px-2 bg-red-200 rounded-b text-xs py-1 text-red-500">
                          {errors.phoneNumber && errors.phoneNumber.message}
                        </p>
                      )}
                    </div>
                    <div className="w-2/5 flex-col">
                      {errors.phoneNumberExt && (
                        <p className="px-2 bg-red-200 rounded-b text-xs py-1 text-red-500">
                          {errors.phoneNumberExt &&
                            errors.phoneNumberExt.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label>Nomor Faksimile</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex justify-start">
                    <div className="w-3/5 flex-col mr-8">
                      <input
                        type="number"
                        name="faxNumber"
                        ref={registerSelect({
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
                        onChange={(val) => setFaxNumber(val.target.value)}
                        className="w-full bg-white border border-gray-400 rounded hover:border-gray-500 py-1 px-2 no-arrow"
                        placeholder="Nomor Faksimile"
                      />
                    </div>
                    <div className="w-2/5 flex-col">
                      <input
                        type="number"
                        name="faxNumberExt"
                        ref={registerSelect({
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
                        onChange={(val) => setFaxNumberExt(val.target.value)}
                        className="w-full bg-white border border-gray-400 rounded hover:border-gray-500 py-1 px-2 no-arrow"
                        placeholder="Ext."
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold"></div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex justify-start">
                    <div className="w-3/5 flex-col mr-8">
                      {errors.faxNumber && (
                        <p className="px-2 bg-red-200 rounded-b text-xs py-1 text-red-500">
                          {errors.faxNumber && errors.faxNumber.message}
                        </p>
                      )}
                    </div>
                    <div className="w-2/5 flex-col">
                      {errors.faxNumberExt && (
                        <p className="px-2 bg-red-200 rounded-b text-xs py-1 text-red-500">
                          {errors.faxNumberExt && errors.faxNumberExt.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label>Situs</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    <input
                      type="text"
                      name="website"
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
                      onChange={(val) => setWebsite(val.target.value)}
                      className="w-full bg-white border border-gray-400 rounded hover:border-gray-500 py-1 px-2"
                      placeholder="example.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold"></div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    {errors.website && (
                      <p className="px-2 bg-red-200 rounded-b text-xs py-1 text-red-500">
                        {errors.website && errors.website.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pt-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold">
                    <label>E-mail Perusahaan</label>
                  </div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    <input
                      type="text"
                      name="companyEmail"
                      ref={registerSelect({
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
                      className="w-full bg-white border border-gray-400 rounded hover:border-gray-500 py-1 px-2"
                      placeholder="me@example.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row pb-2 items-center">
                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mx-4 text-left sm:text-right md:text-right lg:text-right xl:text-right font-bold"></div>
                  <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-4 flex flex-col justify-start">
                    {errors.companyEmail && (
                      <p className="px-2 bg-red-200 rounded-b text-xs py-1 text-red-500">
                        {errors.companyEmail && errors.companyEmail.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalComponent;
