import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { REQ_FORGOT } from "./Query";

interface InitialState {
  _handleSubmitForgot: Function;
  loadingSumbitForgot: boolean;
  data: any;
  error: string;
  showError: boolean;
  showSuccess: boolean;
}

const initialState = {
  _handleSubmitForgot: () => {},
  loadingSumbitForgot: false,
  data: {},
  error: "",
  showError: false,
  showSuccess: false
};

export const ForgotContext = React.createContext<InitialState>(initialState);

export const {
  Provider: ForgotProvider,
  Consumer: ForgotConsumer,
} = ForgotContext;

export const ForgotController = ({ children }) => {
  const [data, setData] = useState<Object>({});
  const [error, setError] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const [
    requetForgotPassword,
    { loading: loadingSumbitForgot },
  ] = useMutation(REQ_FORGOT, { errorPolicy: "all" });
  const _handleSubmitForgot = async (user) => {
    try {
      const { data } = await requetForgotPassword({
        variables: {
          username: user.username,
        },
      });
      setData(data);
      setShowSuccess(true);
      setShowError(false);
    } catch (error) {
      setShowError(true);
      setShowSuccess(false);
      setError("vendor code not avaiable!");
    }
  };

  return (
    <ForgotProvider
      value={{
        _handleSubmitForgot,
        loadingSumbitForgot,
        data,
        error,
        showError,
        showSuccess
      }}
    >
      {children}
    </ForgotProvider>
  );
};
