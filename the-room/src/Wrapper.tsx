import React from 'react';
import GlobalStyle from 'styles/global';
import StyleProvider from 'styles/Provider';
import { Provider } from 'react-redux';

import store from './state/store';

const Wrapper: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <StyleProvider>
      <Provider store={store}>{children}</Provider>
    </StyleProvider>
  </>
);

export default Wrapper;
