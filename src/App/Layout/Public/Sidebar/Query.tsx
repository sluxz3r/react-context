import gql from "graphql-tag";
export const LOGIN = gql`
mutation($data: IUserLogin) {
    LoginUser(data: $data)
  }
`