import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM에서 createRoot를 가져옵니다.
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './redux/reducers';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './assets/css/grid.css';
import './assets/css/theme.css';
import './assets/css/index.css';

import Layout from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer);

document.title = 'Tua CRM';

// React 18 이상에서는 createRoot를 사용해야 합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter></BrowserRouter>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
