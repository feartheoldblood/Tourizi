import React from 'react';
const Footer = () => {
    return <div key="footer" className="card">
        <div className="card-header border-0">
            <div className="row mt-2">
                <div className="col-1 text-center">
                    <a href="/pw-trabajogrupal/Doctor/index.html">
                        <img src="url" width="35" height="35" />
                    </a>
                </div>
                <div className="col-6 fs-sm">
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Inicio</a></li>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                            <li className="page-item"><a className="page-link" href="#">Acerca</a></li>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                            <li className="page-item"><a className="page-link" href="#">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;