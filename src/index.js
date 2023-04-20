import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPageC from './componentes/LoginPageC/LoginPageC';
import UsuarioRegistro from './componentes/UsuarioRegistro/Registro';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu from './componentes/Menu/Menu';
import LoginPageG from './componentes/LoginPageG/LoginPageG';
import Choose from './componentes/choosing/choosing'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPageC/>}/>
        <Route path="/Registro" element={ <UsuarioRegistro/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/LoginGuia" element={<LoginPageG/>}/>
        <Route path="/decidir" element={<Choose/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
