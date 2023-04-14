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