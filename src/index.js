import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HelloWorld} from './pages/draft.jsx'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChampionCard} from './components/champion-card.jsx'
import { ChampionGrid } from './components/champion-grid';
import { BalanceGrid } from './pages/balance-grid';
ReactDOM.render(
  <React.StrictMode>
    <BalanceGrid></BalanceGrid>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
