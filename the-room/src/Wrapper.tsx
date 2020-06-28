import React from 'react';
import { Provider } from 'react-redux';

import store from './state/store';

const Wrapper: React.FC = ({ children }) => (
  <>
    <Provider store={store}>{children}</Provider>
  </>
);

export default Wrapper;
