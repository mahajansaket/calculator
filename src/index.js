import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";

export const client = new ApolloClient({
  uri: "https://welcome-peacock-97.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});
console.log(client);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
