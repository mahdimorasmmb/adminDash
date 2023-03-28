import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
// import "./them.css"


// import $ from 'jquery';
import Popper from 'popper.js';
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
