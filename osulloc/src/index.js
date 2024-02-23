import * as React from 'react'
// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './component/Scroll.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root?.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>

);


