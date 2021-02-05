if (process.env.NODE_ENV === "development") {
  // Must use require here as import statements are only allowed
  // to exist at top-level.
  require("preact/debug");
}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(
  <App userName="Beveloper" lang="TypeScript" />,
  document.getElementById("output")
);
