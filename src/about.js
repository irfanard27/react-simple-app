import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TopMainContent from "./components/TopMainContent";
import registerServiceWorker from './registerServiceWorker';
import './assets/css/dashboard.css';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<TopMainContent />, document.getElementById('top-main-content'));
registerServiceWorker();