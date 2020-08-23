import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faDice,
  faDiceD20,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

import { Layout } from "./components";
import { CharacterProvider } from "./context";

import "./app.css";
import { client } from "./graphql";

library.add(fab, faDice, faDiceD20, faShieldAlt);

function App() {
  return (
    <ApolloProvider client={client}>
      <CharacterProvider>
        <Layout />
      </CharacterProvider>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById("app"));
