import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import { Header } from './components';
import GlobalStyle from './styles';
import store from './store';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <div>
          <Header />
        </div>
      </Provider>
    </>
  );
};

export default App;
