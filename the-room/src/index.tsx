import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Wrapper from "./Wrapper";

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

// serviceWorker.unregister();
