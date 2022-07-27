import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/custom.scss';
import App from './App';
import Navbar from './components/Navbar';

import pfpImg from './assets/ThePolice.jpg';
import Settings from './pages/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <Navbar/>
    <Settings img={pfpImg}/>
  </React.StrictMode>
);
