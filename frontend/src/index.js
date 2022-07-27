import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/custom.scss';
import App from './App';
import Navbar from './components/Navbar';
import DeleteView from './components/settings/DeleteView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <Navbar/>
    <div className='container mt-5 pt-5'>
      <DeleteView/>
    </div>
  </React.StrictMode>
);
