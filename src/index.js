import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Portfolio from './Portfolio';
import reportWebVitals from './reportWebVitals';
import Calculator from './calc';
import Data from './Data';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/data" element={<Data />} /> {/* Add this line */}
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
