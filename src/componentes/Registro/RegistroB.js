import { useNavigate } from "react-router-dom"
import React from "react";
import Registro from '../UsuarioRegistro/Registro'

function RegistroB(){
    const navigate = useNavigate()

    const loginHttp = async function(nombre, apellido, usuario, password){
        const response = await fetch("http://localhost:8000/endpoints/registroCliente", {
            method : "POST",
            body : JSON.stringify(
                {
                    nombre : nombre,
                    apellido : apellido,
                    usuario : usuario,
                    password : password
                }
            )
        })
        const data = await response.json()
        return data.error
    }

    const onRegistroOK = async function(nombre, apellido, usuario, password){
        const error = await loginHttp(nombre, apellido, usuario, password)
        if (error === ""){
            const dataUsuario = {
                nombre : nombre,
                apellido : apellido,
                usuario : usuario,
                password : password
            }

            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

            navigate("/Index")
        }else{
            console.error(error)
        }
    }

    return <div className="container w-75 mt-5 rounded">
        <div className="row align-items-stretch">
            <div className="col">
                <h2 className="fw-bold text-center py-5">Login Guía-Turístico</h2>
                <Registro onRegistroOK={onRegistroOK}/>
            </div>
        </div>
    </div>

}

export default RegistroB