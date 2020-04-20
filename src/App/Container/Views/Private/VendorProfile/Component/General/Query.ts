import gql from "graphql-tag";

export const GENERAL_LIST = gql`
  {
    GetVendorContacts {
      id
      companyName
      address
      county
      province
      city
      district
      phoneNumber
      faxNumber
      website
      eMail
    }
  }
`;

export const INSERT_VENDOR_CONTACT = gql`
  mutation(
    $company_name: String
    $address: String
    $country: String
    $province: String
    $city: String
    $district: String
    $postal_code: Int
    $phone_number: String
    $website: String
    $e_mail: String
  ) {
    InsertVendorContact(
      data: {
        company_name: $company_name
        address: $address
        country: $country
        province: $province
        city: $city
        district: $district
        postal_code: $postal_code
        phone_number: $phone_number
        website: $website
        e_mail: $e_mail
      }
    )
  }
`;
