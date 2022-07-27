import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/custom.scss';
import App from './App';
import MainView from './components/settings/MainView';
import Navbar from './components/Navbar';

import pfpImg from './assets/ThePolice.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <Navbar/>
    <MainView img={pfpImg}/>
    <MainView/>
  </React.StrictMode>
);
