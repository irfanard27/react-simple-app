import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';
import './assets/css/dashboard.css';

ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));

ReactDOM.render(<App />, document.getElementById('top-main-content'));
registerServiceWorker();
