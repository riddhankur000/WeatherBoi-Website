import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
  );
  

  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />}>
        
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
  