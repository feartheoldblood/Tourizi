import { useNavigate } from "react-router-dom"
import LoginFormG from "../comp_LoginG/LoginFormG"
import React from "react"

function LoginPageG(){
    const navigate = useNavigate()

    const loginHttp = async function(usuario, password){
        const response = await fetch("http://localhost:8000/endpoints/loginGuia", {
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

            navigate("/pantalla3", {
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
                <h2 className="fw-bold text-center py-5">Login Guía-Turístico</h2>
                <LoginFormG onLoginOk={onLoginOk}/>
            </div>
        </div>
    </div>

}

export default LoginPageG