import React from "react";
import "./LoginHome.css"; 
import Card from 'react-bootstrap/Card';


function Home1() {
    return (
        <div className = "Contenedor">
            <div className="col-9 fs-sm d-flex justify-content-end">
                    <ul className="pagination">
                        <li><button type="button" className="border btn btn-light btn-sm">Usuario Chofer</button></li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <button type="button" className="border btn btn-light btn-sm">Usuario Cliente</button>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <li>
                            
                        </li>
                    </ul>
            </div>
        </div>
    );
}

export default Home1;