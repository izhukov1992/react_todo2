import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'

import App from './App';
import reportWebVitals from './reportWebVitals';
import todoApp from './reducers'

import './index.css';

const store = createStore(todoApp)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App store={store} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
