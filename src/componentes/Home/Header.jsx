import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return <div className="card">
        <div className="card-header border-0">
            <div className="row mt-2">
                <div className="col-1 text-center">
                    <a href="/pw-trabajogrupal/Doctor/index.html">
                        <img src="" width="35" height="35" alt=''/>
                    </a>
                </div>
                <div className="col-2">
                    <a href="/">
                        <button type="button" className="btn btn-light border btn-lg">Home</button>
                    </a>
                </div>
                <div className="col-9 fs-sm d-flex justify-content-end">
                    <ul className="pagination">
                        <li><Link to="/LoginGuia"><button type="button" className="border btn btn-light btn-sm">Usuario Chofer</button></Link></li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <Link to="/Index"><button type="button" className="border btn btn-light btn-sm">Usuario Cliente</button></Link>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default Header;