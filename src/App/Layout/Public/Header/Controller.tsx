import React, { createContext, useState } from "react";

interface InitialState {
  openProcedure: boolean;
  setOpenProcedure: Function;
  openGuidance: boolean;
  setOpenGuidance: Function;
  openAnnouncement: boolean;
  setOpenAnnoucement: Function;
  openLanguage: boolean;
  setOpenLanguage: Function;
  openOptions: boolean;
  setOpenOptions: Function;
  _handleOpenProcedure: Function;
  _handleOpenGuidance: Function;
  _handleOpenAnnouncement: Function;
  _handleOpenLanguage: Function;
  _handleOpenOptions: Function;
  _handleClickAway: Function;
}

const initialState = {
  openProcedure: false,
  setOpenProcedure: () => {},
  openGuidance: false,
  setOpenGuidance: () => {},
  openAnnouncement: false,
  setOpenAnnoucement: () => {},
  openLanguage: false,
  setOpenLanguage: () => {},
  openOptions: false,
  setOpenOptions: () => {},
  _handleOpenProcedure: () => {},
  _handleOpenGuidance: () => {},
  _handleOpenAnnouncement: () => {},
  _handleOpenLanguage: () => {},
  _handleOpenOptions: () => {},
  _handleClickAway: () => {},
};

export const HeaderContext = createContext<InitialState>(initialState);

export const {
  Provider: HeaderProvider,
  Consumer: HeaderConsumer,
} = HeaderContext;

const HeaderController = ({ children }) => {
  const [openProcedure, setOpenProcedure] = useState(false);
  const [openGuidance, setOpenGuidance] = useState(false);
  const [openAnnouncement, setOpenAnnoucement] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const _handleOpenProcedure = () => {
    setOpenProcedure(!openProcedure);
    setOpenGuidance(false);
    setOpenAnnoucement(false);
    setOpenLanguage(false);
    setOpenOptions(false);
  };
  const _handleOpenGuidance = () => {
    setOpenGuidance(!openGuidance);
    setOpenProcedure(false);
    setOpenAnnoucement(false);
    setOpenLanguage(false);
    setOpenOptions(false);
  };
  const _handleOpenAnnouncement = () => {
    setOpenAnnoucement(!openAnnouncement);
    setOpenProcedure(false);
    setOpenGuidance(false);
    setOpenLanguage(false);
    setOpenOptions(false);
  };
  const _handleOpenLanguage = () => {
    setOpenLanguage(!openLanguage);
    setOpenProcedure(false);
    setOpenGuidance(false);
    setOpenAnnoucement(false);
    setOpenOptions(false);
  };

  const _handleOpenOptions = () => {
    setOpenOptions(!openOptions);
    setOpenProcedure(false);
    setOpenGuidance(false);
    setOpenAnnoucement(false);
    setOpenLanguage(false);
  };

  const _handleClickAway = () => {
    setOpenProcedure(false);
    setOpenGuidance(false);
    setOpenAnnoucement(false);
    setOpenLanguage(false);
    setOpenOptions(false);
  };

  return (
    <HeaderProvider
      value={{
        openProcedure,
        setOpenProcedure,
        openGuidance,
        setOpenGuidance,
        openAnnouncement,
        setOpenAnnoucement,
        openLanguage,
        setOpenLanguage,
        openOptions,
        setOpenOptions,
        _handleOpenProcedure,
        _handleOpenGuidance,
        _handleOpenAnnouncement,
        _handleOpenLanguage,
        _handleOpenOptions,
        _handleClickAway,
      }}
    >
      {children}
    </HeaderProvider>
  );
};

export default HeaderController;
