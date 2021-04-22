import './styles/main.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

const MOUNT_NODE = document.getElementById('app');

moment.locale('en-US');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE,
);
