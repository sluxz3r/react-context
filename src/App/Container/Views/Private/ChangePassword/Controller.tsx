import React, { useState } from "react";

interface InitialState {
  currentPassword: string;
  setCurrentPassword: Function;
  newPassword: string;
  setNewPassword: Function;
  confirmNewPassword: string;
  setConfirmNewPassword: Function;
}

const initialState = {
  currentPassword: "",
  setCurrentPassword: () => {},
  newPassword: "",
  setNewPassword: () => {},
  confirmNewPassword: "",
  setConfirmNewPassword: () => {},
};

export const ChangePasswordContext = React.createContext<InitialState>(
  initialState
);

export const {
  Provider: ChangePasswordProvider,
  Consumer: ChangePasswordConsumer,
} = ChangePasswordContext;

export const ChangePasswordController = ({ children }) => {
  // CHANGE PASSWORD
  // =====================================================================================
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  // =====================================================================================

  return (
    <ChangePasswordProvider
      value={{
        currentPassword,
        setCurrentPassword,
        newPassword,
        setNewPassword,
        confirmNewPassword,
        setConfirmNewPassword,
      }}
    >
      {children}
    </ChangePasswordProvider>
  );
};
