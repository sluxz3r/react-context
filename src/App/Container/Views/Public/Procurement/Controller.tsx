import React, { createContext, useState } from "react";
// import { useQuery } from "react-apollo";
// import { GET_PROCUREMENT } from "./Query";

interface InitialState {
  //   dataProcurement: any;
  procurement: boolean;
  _handleOpenNumber: Function;
  _handleOpenTenderName: Function;
  _handleOpenScopeWork: Function;
  _handleOpenPurchasing: Function;
  _handleOpenBidSubmission: Function;
  _handleOpenState: Function;
  _handleClickAway: Function;
  openNumber: boolean;
  openState: boolean;
  openTenderName: boolean;
  openScopeWork: boolean;
  openPurchasing: boolean;
  openBidSubmission: boolean;
  setProcurement: Function;
}

const initialState = {
  //   dataProcurement: [],
  procurement: false,
  _handleOpenNumber: () => {},
  _handleOpenState: () => {},
  _handleOpenTenderName: () => {},
  _handleOpenScopeWork: () => {},
  _handleOpenPurchasing: () => {},
  _handleOpenBidSubmission: () => {},
  _handleClickAway: () => {},
  openNumber: false,
  openState: false,
  openTenderName: false,
  openScopeWork: false,
  openPurchasing: false,
  openBidSubmission: false,
  setProcurement: () => {},
};

export const ProcurementContext = createContext<InitialState>(initialState);
export const {
  Provider: ProcurementProvider,
  Consumer: ProcurementConsumer,
} = ProcurementContext;

export const ProcurementController = ({ children }) => {
  const [procurement, setProcurement] = useState<boolean>(false);
  //   const { data: dataProcurement } = useQuery(GET_PROCUREMENT);

  const [openNumber, setOpenNumber] = useState(false);
  const _handleOpenNumber = () => {
    setOpenNumber(!openNumber);
    setOpenTenderName(false);
    setOpenScopeWork(false);
    setOpenPurchasing(false);
    setOpenBidSubmission(false);
    setOpenState(false);
  };

  const [openState, setOpenState] = useState(false);
  const _handleOpenState = () => {
    setOpenState(!openState);
    setOpenTenderName(false);
    setOpenScopeWork(false);
    setOpenPurchasing(false);
    setOpenBidSubmission(false);
    setOpenNumber(false);
  };

  const [openTenderName, setOpenTenderName] = useState(false);
  const _handleOpenTenderName = () => {
    setOpenTenderName(!openTenderName);
    setOpenNumber(false);
    setOpenScopeWork(false);
    setOpenPurchasing(false);
    setOpenBidSubmission(false);
    setOpenState(false);
  };

  const [openScopeWork, setOpenScopeWork] = useState(false);
  const _handleOpenScopeWork = () => {
    setOpenScopeWork(!openScopeWork);
    setOpenNumber(false);
    setOpenTenderName(false);
    setOpenPurchasing(false);
    setOpenBidSubmission(false);
    setOpenState(false);
  };

  const [openPurchasing, setOpenPurchasing] = useState(false);
  const _handleOpenPurchasing = () => {
    setOpenPurchasing(!openPurchasing);
    setOpenNumber(false);
    setOpenScopeWork(false);
    setOpenTenderName(false);
    setOpenBidSubmission(false);
    setOpenState(false);
  };

  const [openBidSubmission, setOpenBidSubmission] = useState(false);
  const _handleOpenBidSubmission = () => {
    setOpenBidSubmission(!openBidSubmission);
    setOpenNumber(false);
    setOpenScopeWork(false);
    setOpenPurchasing(false);
    setOpenTenderName(false);
    setOpenState(false);
  };

  const _handleClickAway = () => {
    setOpenNumber(false);
    setOpenScopeWork(false);
    setOpenPurchasing(false);
    setOpenTenderName(false);
    setOpenBidSubmission(false);
    setOpenState(false);
  };

  return (
    <ProcurementProvider
      value={{
        procurement,
        setProcurement,
        // dataProcurement,
        _handleOpenBidSubmission,
        _handleOpenNumber,
        _handleOpenPurchasing,
        _handleOpenScopeWork,
        _handleOpenTenderName,
        _handleOpenState,
        _handleClickAway,
        openBidSubmission,
        openNumber,
        openPurchasing,
        openScopeWork,
        openTenderName,
        openState,
      }}
    >
      {children}
    </ProcurementProvider>
  );
};
