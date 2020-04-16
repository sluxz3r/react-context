import gql from "graphql-tag";

export const REGISTER_NEW_VENDOR = gql`
  mutation(
    $name: String!
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
