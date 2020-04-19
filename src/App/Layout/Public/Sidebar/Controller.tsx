import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { LOGIN } from "./Query";
import { getToken, setCredential } from "../../../../App/Misc/Cookies";
interface InitialState {
  _handleLogin: Function;
  showError: boolean;
  errorMessage: string;
  loadingLogin:boolean;
  showPassword: boolean;
  setShowPassword: Function;
}

const initialState = {
  _handleLogin: () => {},
  showError: false,
  errorMessage: "",
  loadingLogin: false,
  showPassword: false,
  setShowPassword: () => {}
};

export const LoginContext = React.createContext<InitialState>(initialState);

export const {
  Provider: LoginProvider,
  Consumer: LoginConsumer,
} = LoginContext;

export const LoginController = ({ children }) => {
  console.log(getToken());

  const [login, {loading: loadingLogin}] = useMutation(LOGIN);
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const _handleLogin = async (user) => {
    try {
      const { data } = await login({
        variables: {
          data: {
            username: user.username,
            password: user.password,
          },
        },
      });
      setCredential({ token: data.LoginUser, expired: "" });
      window.location.href = '/';
    } catch (error) {
      setShowError(true)
      setErrorMessage(error.graphQLErrors[0].message)
    }
  };

  const [showPassword, setShowPassword] = useState(false)

  return (
    <LoginProvider
      value={{
        _handleLogin,
        showError,
        errorMessage,
        loadingLogin,
        showPassword,
        setShowPassword
      }}
    >
      {children}
    </LoginProvider>
  );
};
