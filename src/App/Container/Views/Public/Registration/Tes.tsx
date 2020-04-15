/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";

const REGISTER_NEW_VENDOR = gql`
  mutation {
    registerNewVendor(
      data: {
        name: "PT Pindad Jaya"
        owner: "sukasih"
        business_type: "PENDIDIKAN"
        register_date: "2020-03-26 15:14:00"
        vendor_type: "PERSONAL"
        contacts: [
          {
            company_name: "pindad jaya"
            address: "jalan damai no 7 "
            country: "indonesia"
            province: "yogyakarta"
            district: "depok"
            city: "kota yogyakarta"
            postal_code: 58881
            phone_number: "081914005050"
            fax_number: ""
            website: "www.pindadjaya.com"
            e_mail: "test@pindadjaya.com"
          }
        ]
        tax_document: [
          { tax_document_type: "NPWP", tax_document_number: "1234567890" }
        ]
        person_in_charge: [
          {
            pic_name: "PIC_test"
            e_mail: "test@mail.com"
            phone_number: "081914005052"
          }
        ]
      }
    )
  }
`;

const TesView = () => {
  const { register, handleSubmit, errors } = useForm({
    validateCriteriaMode: "all",
    mode: "onChange",
  });
  const dataReg = {
    name: "PT Pindad Jaya",
    owner: "sukasih",
    business_type: "PENDIDIKAN",
    register_date: "2020-03-26 15:14:00",
    vendor_type: "PERSONAL",
    contacts: [
      {
        company_name: "pindad jaya",
        address: "jalan damai no 7 ",
        country: "indonesia",
        province: "yogyakarta",
        district: "depok",
        city: "kota yogyakarta",
        postal_code: 58881,
        phone_number: "081914005050",
        fax_number: "",
        website: "www.pindadjaya.com",
        e_mail: "test@pindadjaya.com",
      },
    ],
    tax_document: [
      {
        tax_document_type: "NPWP",
        tax_document_number: "1234567890",
      },
    ],
    person_in_charge: [
      {
        pic_name: "PIC_test",
        e_mail: "test@mail.com",
        phone_number: "081914005052",
      },
    ],
  };

  const [
    submitRegister,
    { loading: loadingRegister },
  ] = useMutation(REGISTER_NEW_VENDOR, { errorPolicy: "all" });
  const _handleSubmitRegister = async () => {
    submitRegister({
      variables: {
        dataReg,
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(_handleSubmitRegister)}>
        <button
          type="submit"
          onClick={() => console.log("CEK")}
          className="bg-blue-500 px-2 py-1"
        >
          Insert
        </button>
      </form>
    </div>
  );
};

export default TesView;
