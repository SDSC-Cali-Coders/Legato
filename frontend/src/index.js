import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/custom.scss';
import App from './App';
import Navbar from './components/Navbar';
import ConfirmView from './components/settings/ConfirmView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <Navbar/>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-3'>
        </div>
        <div className='col-6'>
          <ConfirmView/>
        </div>
        <div className='col-3'>
        </div>
      </div>
    </div>
  </React.StrictMode>
);
