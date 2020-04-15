import gql from "graphql-tag";

export const REGISTER_NEW_VENDOR2 = gql`
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

export const REGISTER_NEW_VENDOR = gql`
  mutation(
    $name: String
    $owner: String
    $business_type: String
    $register_date: Date
    $vendor_type: String
    $company_name: String
    $address: String
    $country: String
    $province: String
    $district: String
    $city: String
    $postal_code: Int
    $phone_number: String
    $fax_number: String
    $website: String
    $e_mail: String
    $tax_document_type: String
    $tax_document_number: String
    $pic_name: String
    $picEmail: String
    $picMobileNumber: String
  ) {
    registerNewVendor(
      data: {
        name: $name
        owner: $owner
        business_type: $business_type
        register_date: $register_date
        vendor_type: $vendor_type
        contacts: [
          {
            company_name: $company_name
            address: $address
            country: $country
            province: $province
            district: $district
            city: $city
            postal_code: $postal_code
            phone_number: $phone_number
            fax_number: $fax_number
            website: $website
            e_mail: $e_mail
          }
        ]
        tax_document: [
          {
            tax_document_type: $tax_document_type
            tax_document_number: $tax_document_number
          }
        ]
        person_in_charge: [
          {
            pic_name: $pic_name
            e_mail: $picEmail
            phone_number: $picMobileNumber
          }
        ]
      }
    )
  }
`;
