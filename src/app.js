import React from "react";
import { render } from "react-dom";

import { Layout } from "./components";

import "./app.css";

function App() {
  return <Layout />;
}

render(<App />, document.getElementById("app"));
