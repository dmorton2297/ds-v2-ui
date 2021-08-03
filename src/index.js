import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationContainer from './components';
import { appStore } from './state'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <ApplicationContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

