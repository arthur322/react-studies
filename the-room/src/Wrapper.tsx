import React from "react";
import GlobalStyle from "styles/global";
import Provider from "styles/Provider";

const Wrapper: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <Provider>{children}</Provider>
  </>
);

export default Wrapper;
