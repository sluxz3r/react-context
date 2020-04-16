import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { LOGIN } from "./Query";
import { getToken, setCredential } from "../../../../App/Misc/Cookies";
import history from '../../../Misc/BrowserHistory'
interface InitialState {
  _handleLogin: Function;
}

const initialState = {
  _handleLogin: () => {},
};

export const LoginContext = React.createContext<InitialState>(initialState);

export const {
  Provider: LoginProvider,
  Consumer: LoginConsumer,
} = LoginContext;

export const LoginController = ({ children }) => {
  console.log(getToken());

  const [login, { loading: loadingLogin }] = useMutation(LOGIN);

  const _handleLogin = async (user) => {
    try {
      const { data } = await login({
        variables: {
          username: user.username,
          password: user.password,
        },
      });
      setCredential({ token: data.LoginUser, expired: "" });
      window.location.reload()
    } catch (error) {
      console.log("my error", error.graphQLErrors[0].message);
    }
  };

  return (
    <LoginProvider
      value={{
        _handleLogin,
      }}
    >
      {children}
    </LoginProvider>
  );
};
