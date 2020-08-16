import React from "react";
import { render } from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faDice,
  faDiceD20,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

import { Layout } from "./components";

import "./app.css";

library.add(fab, faDice, faDiceD20, faShieldAlt);

function App() {
  return <Layout />;
}

render(<App />, document.getElementById("app"));
