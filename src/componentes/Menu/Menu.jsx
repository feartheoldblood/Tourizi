import { Link } from "react-router-dom"
import './Menu.css'
import React from "react";

function Menu(){

    return <div style={{backgroundColor: "black"}}>
        <ul>
            <li><Link to={"/"} className="nav-link active">Login</Link></li>
            <li><Link to={"/Registro"} className="nav-link active" >Registro del Usuario</Link></li>
            <li><Link to={"/pantalla6"} className="nav-link active" >Carrito</Link></li>
            <li><Link to={"/pantalla16"} className="nav-link active">Ver Pedido</Link></li>
            <li><Link to={"/"} className="nav-link active" >Cerrar Sesion</Link></li>
        </ul>
    </div>
  }
  export default Menu