import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routes/AppRouter';
import Header from './components/Header/Header';
import About from './components/About/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import Code from './components/Code/Code';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<AppRouter />}>
                  {/* <Route path="/" element={<Header />} /> */}
                  <Route path="/about" element={<About />} />
                  
                </Route>
                <Route path="/code" element={<Code />} />
              </Routes>
          </BrowserRouter>
    </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
