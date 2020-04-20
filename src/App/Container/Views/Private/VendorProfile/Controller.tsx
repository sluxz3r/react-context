import React, { createContext } from "react";
import { useQuery } from "react-apollo";
import { GENERAL_LIST } from "../VendorProfile/Component/General/Query";

interface InitialState {
  generalList: object;
}

const initialState = {
  generalList: {},
};

export const HomeContext = createContext<InitialState>(initialState);

export const { Provider: HomeProvider, Consumer: HomeConsumer } = HomeContext;

export const HomeController = ({ children }) => {
  const { data: generalList } = useQuery(GENERAL_LIST);

  return <HomeProvider value={{ generalList }}>{children}</HomeProvider>;
};
