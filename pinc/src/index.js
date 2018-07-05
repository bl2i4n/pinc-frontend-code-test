import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <SOMECOMPONENT/>
  </Provider>,
  <App />,
  document.getElementById('root')

);
registerServiceWorker();
