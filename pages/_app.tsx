import * as React from 'react';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import '../components/Header/authBlock/authBlock.css';
import '../components/logInModalWindow/LogInModalWindow.css';
import storeConfiguration from '../store/storeConfiguration';

const store = storeConfiguration();

type MyAppProps = { Component?: any; pageProps?: any };

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
