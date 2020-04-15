import gql from "graphql-tag";
export const REQ_FORGOT = gql`
mutation($username: String!) {
    RequestForgotPassword(username: $username)
  }
`