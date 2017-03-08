import React from 'react';
import ReactDOM from 'react-dom';
import GetApi from './components/GetApi';
import App from './App';
import './index.css';

ReactDOM.render(
  <App source="../products.json"/>,
  document.getElementById('root')
);
