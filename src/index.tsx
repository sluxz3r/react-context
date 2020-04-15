import React from "react";
import ReactDOM from "react-dom";
import "./App/Container/Assets/Css/main.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, DefaultOptions } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { userToken } from "./App/Misc/Cookies";
const { createUploadLink } = require("apollo-upload-client");

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};
const client = new ApolloClient({
  link: createUploadLink({
    uri: process.env.REACT_APP_API + "/graphql",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  }),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
