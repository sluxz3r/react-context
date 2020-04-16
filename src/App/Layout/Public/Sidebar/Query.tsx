import gql from "graphql-tag";
export const LOGIN = gql`
mutation($username: String!, $password: String!) {
    LoginUser(username: $username, password: $password)
  }
`