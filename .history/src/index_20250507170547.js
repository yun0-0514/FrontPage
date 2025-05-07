import React from 'react';
import ReactDOM from 'react-dom/client';
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

document.title = '개발의 진수';

// React 18 이상에서는 createRoot를 사용해야 합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
