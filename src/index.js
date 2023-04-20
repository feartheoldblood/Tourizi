import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './componentes/LoginPage/LoginPage';
import UsuarioRegistro from './componentes/UsuarioRegistro/Registro';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home1 from './componentes/Home/Home';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={ <Home1/>}/>
        <Route path="/Login " element={ <LoginPage/>}/>
        <Route path="/Registro" element={ <UsuarioRegistro/>}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
