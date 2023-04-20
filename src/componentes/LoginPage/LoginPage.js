import { useNavigate } from "react-router-dom"
import LoginFormR from "../comp_Login/LoginFormR"
import React from "react"

function LoginPageR(){
    const navigate = useNavigate()

    const loginHttp = async function(usuario, password){
        const response = await fetch("http://localhost:8000/endpoints/loginR", {
            method : "POST",
            body : JSON.stringify(
                {
                    usuario : usuario,
                    password : password
                }
            )
        })
        const data = await response.json()
        return data.error
    }

    const onLoginOk = async function(usuario, password){
        const error = await loginHttp(usuario, password)
        if (error === ""){
            const dataUsuario = {
                usuario : usuario,
                password : password
            }

            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

            navigate("/pantalla10", {
                state : {
                    usuario : usuario
                }
            })
        }else{
            console.error(error)
        }
    }

    return <div className="container w-75 mt-5 rounded">
        <div className="row align-items-stretch">
            <div className="col">
                <h2 className="fw-bold text-center py-5">Login Restaurante</h2>
                <LoginFormR onLoginOk={onLoginOk}/>
            </div>
        </div>
    </div>

}

export default LoginPageR













/*

import React from "react";
import "./LoginPage.css"; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function LoginPage() {
  return (
    <div className = "Contenedor-padre">
    <Card style={{ width: '20rem', height: "16rem",'background' : '#A7CAB9' }}>
      <Card.Body>
        <Card.Title style={{'font-family' : 'Verdana, Geneva, Tahoma, sans-serif'}}>TOURIZI</Card.Title>
        <br/>
        <section>
          <input type="text" name="email" id="email" placeholder="Email"/>
  
          <input type="text" name="contraseña" id="contraseña" placeholder="Contraseña"/>
        </section>
        <br/>
        <Button variant="primary" style={{background: '#2C2929', width: '12rem', 'font-family' : 'Verdana, Geneva, Tahoma, sans-serif'}}>INGRESAR</Button>
        <p>¿Olvido su contraseña?</p>

      </Card.Body>
    </Card>
    </div>
  );
}

export default LoginPage;

*/