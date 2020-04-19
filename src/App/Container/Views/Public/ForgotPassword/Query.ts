import gql from "graphql-tag";
export const REQ_FORGOT = gql`
mutation($data: IVendorCode!) {
    RequestForgotPassword(data: $data)
  }
`